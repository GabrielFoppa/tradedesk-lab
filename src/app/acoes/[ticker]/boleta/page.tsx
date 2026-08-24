import BoletaForm from "@/components/BoletaForm";
import Link from "next/link";

interface Props {
  params: Promise<{ ticker: string }>;
}

export default async function BoletaPage({ params }: Props) {
  const { ticker } = await params;

  const res = await fetch(`http://localhost:3000/api/acoes/${ticker}`, { cache: "no-store" });
  const acao = await res.json();

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "0 1rem" }}>
      <Link href={`/acoes/${ticker}`} style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>← {ticker}</Link>
      <h1 style={{ margin: "1rem 0 1.5rem", fontSize: "1.25rem" }}>Ordem de Compra</h1>
      <BoletaForm acao={acao} />
    </div>
  );
}
