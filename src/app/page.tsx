import Link from "next/link";

export default async function HomePage() {
  let acoes: any[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/acoes", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) acoes = data;
    }
  } catch (err) {
    acoes = [];
  }

  const acoesDestaque = Array.isArray(acoes) ? acoes.slice(0, 5) : [];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem", color: "#fff" }}>
        Painel de Ações
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
        {acoesDestaque.length === 0 ? (
          <p style={{ color: "#888" }}>Nenhuma ação encontrada no momento.</p>
        ) : (
          acoesDestaque.map((a: any, index: number) => {
            const ticker = a?.ticker || a?.symbol || `ACAO-${index}`;
            return (
              <Link key={ticker} href={`/acoes/${ticker}`} style={{ textDecoration: "none" }}>
                <div style={{ border: "1px solid #2a2a2a", padding: "1rem", borderRadius: "8px", background: "#0a0a0a" }}>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#f59e0b" }}>
                    {ticker}
                  </div>
                  {a?.preco && (
                    <div style={{ marginTop: "0.5rem", color: "#22c55e", fontWeight: 600 }}>
                      R$ {Number(a.preco).toFixed(2)}
                    </div>
                  )}
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}