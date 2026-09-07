import { notFound } from "next/navigation";
import Link from "next/link";
import GraficoAcao from "@/components/GraficoAcao";

interface PageProps {
  params: Promise<{ ticker: string }>;
}

async function getAcao(ticker: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/acoes/${ticker}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function AcaoDetailPage({ params }: PageProps) {
  const { ticker } = await params;

  if (!ticker) {
    notFound();
  }

  const acao = await getAcao(ticker);

  // Dispara a pagina 404 padrao do Next.js se o ticker nao for encontrado na API
  if (!acao || acao.error) {
    notFound();
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#f59e0b" }}>
            {acao.ticker || ticker.toUpperCase()}
          </h1>
          <p style={{ color: "#888" }}>{acao.nome || "Ação do Mercado B3"}</p>
        </div>

        <Link
          href={`/acoes/${acao.ticker}/boleta`}
          style={{
            background: "#22c55e",
            color: "#000",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Negociar
        </Link>
      </div>

      <GraficoAcao acao={acao} precoAtual={acao.preco} />
    </div>
  );
}