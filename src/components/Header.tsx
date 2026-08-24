import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#111", borderBottom: "1px solid #222", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link href="/" style={{ color: "#f59e0b", fontWeight: 700, fontSize: "1.25rem", textDecoration: "none", letterSpacing: "0.1em" }}>
        📈 TRADEDESK
      </Link>
      <nav style={{ display: "flex", gap: "2rem" }}>
        <Link href="/acoes" style={{ color: "#e5e5e5", textDecoration: "none", fontSize: "0.9rem" }}>Ações</Link>
        <Link href="/carteira" style={{ color: "#e5e5e5", textDecoration: "none", fontSize: "0.9rem" }}>Carteira</Link>
      </nav>
    </header>
  );
}
