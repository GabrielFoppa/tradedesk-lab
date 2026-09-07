"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ACOES_MOCK } from "@/lib/mocks";
import Link from "next/link";

export default function HomePage() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const tickerFormatado = busca.trim().toUpperCase();

    if (tickerFormatado) {
      router.push(`/acoes/${tickerFormatado}`);
    }
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1.5rem", color: "#f59e0b" }}>
        Painel de Cotações B3
      </h1>

      <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite o ticker (ex: PETR4)"
          style={{
            flex: 1,
            padding: "0.75rem",
            background: "#0d0d0d",
            border: "1px solid #333",
            color: "#e5e5e5",
            borderRadius: "4px",
            fontFamily: "monospace",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#f59e0b",
            color: "#000",
            border: "none",
            padding: "0.75rem 1.5rem",
            fontWeight: 700,
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Buscar
        </button>
      </form>

      <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Ações em Destaque</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
        {ACOES_MOCK.map((acao) => (
          <Link
            key={acao.ticker}
            href={`/acoes/${acao.ticker}`}
            style={{
              display: "block",
              padding: "1rem",
              background: "#0a0a0a",
              border: "1px solid #2a2a2a",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            <div style={{ fontWeight: 700, color: "#f59e0b", fontSize: "1.1rem" }}>{acao.ticker}</div>
            <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "0.5rem" }}>{acao.nome}</div>
            <div style={{ fontWeight: 700, color: "#22c55e" }}>R$ {acao.preco.toFixed(2)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}