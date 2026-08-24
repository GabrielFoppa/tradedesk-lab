export default async function CarteiraPage() {
  let ordens: any[] = [];
  try {
    const res = await fetch("http://localhost:3000/api/ordens", { cache: "no-store" });
    ordens = await res.json();
  } catch { ordens = []; }

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem" }}>Minha Carteira</h1>
      {ordens.length === 0 ? (
        <p style={{ color: "#888" }}>Nenhuma ordem registrada ainda.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #2a2a2a", color: "#888", fontSize: "0.75rem" }}>
              <th style={{ textAlign: "left", padding: "0.75rem" }}>TICKER</th>
              <th style={{ textAlign: "right", padding: "0.75rem" }}>QTD</th>
              <th style={{ textAlign: "right", padding: "0.75rem" }}>PREÇO</th>
              <th style={{ textAlign: "right", padding: "0.75rem" }}>TOTAL</th>
              <th style={{ textAlign: "left", padding: "0.75rem" }}>DATA</th>
            </tr>
          </thead>
          <tbody>
            {ordens.map((o: any, i: number) => (
              <tr key={i} style={{ borderBottom: "1px solid #1a1a1a" }}>
                <td style={{ padding: "0.75rem", color: "#f59e0b", fontWeight: 700 }}>{o.ticker ?? o.nome ?? "?"}</td>
                <td style={{ padding: "0.75rem", textAlign: "right" }}>{o.quantidade}</td>
                <td style={{ padding: "0.75rem", textAlign: "right" }}>R$ {Number(o.preco)?.toFixed(2)}</td>
                <td style={{ padding: "0.75rem", textAlign: "right", color: "#22c55e" }}>R$ {Number(o.total)?.toFixed(2)}</td>
                <td style={{ padding: "0.75rem", color: "#888", fontSize: "0.75rem" }}>{o.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
