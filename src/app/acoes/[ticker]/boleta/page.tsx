import { notFound } from "next/navigation";
import BoletaForm from "@/components/BoletaForm";

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

export default async function BoletaPage({ params }: PageProps) {
  const { ticker } = await params;

  if (!ticker) {
    notFound();
  }

  const acao = await getAcao(ticker);

  const dadosAcao = acao ?? {
    ticker: ticker.toUpperCase(),
    preco: 0,
    nome: ticker.toUpperCase(),
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
        Negociar Ação
      </h2>
      <BoletaForm acao={dadosAcao} />
    </div>
  );
}