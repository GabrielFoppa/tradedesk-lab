import Link from "next/link";
import { MercadoStatus } from "@/components/MercadoStatus";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justify: "space-between",
        padding: "1rem 2rem",
        borderBottom: "1px solid #2a2a2a",
        background: "#0a0a0a",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link
          href="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#f59e0b",
            textDecoration: "none",
          }}
        >
          TradeDesk Lab
        </Link>

        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link
            href="/"
            style={{ color: "#e5e5e5", textDecoration: "none", fontSize: "0.9rem" }}
          >
            Início
          </Link>
          <Link
            href="/carteira"
            style={{ color: "#e5e5e5", textDecoration: "none", fontSize: "0.9rem" }}
          >
            Carteira
          </Link>
        </nav>
      </div>

      <MercadoStatus />
    </header>
  );
}

export default Header;