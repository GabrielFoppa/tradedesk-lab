"use client";

import { useState } from "react";
import type { Acao } from "@/types/acao";

interface Props {
  acao: Acao;
}

export default function BoletaForm({ acao }: Props) {
  // Garante a leitura do preço seja de 'preco' ou de 'regularMarketPrice'
  const precoValido = Number(acao?.preco ?? (acao as any)?.regularMarketPrice ?? 0);

  const [quantidade, setQuantidade] = useState<number | "">(100);
  const [enviado, setEnviado] = useState(false);

  const qtdNumerica = Number(quantidade) || 0;
  const total = qtdNumerica * precoValido;

  async function handleCompra() {
    if (qtdNumerica <= 0) return;

    await fetch("/api/ordens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticker: acao.ticker,
        quantidade: qtdNumerica,
        preco: precoValido,
        total,
        tipo: "compra",
      }),
    });
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="card-terminal" style={{ textAlign: "center", color: "#22c55e", padding: "1.5rem" }}>
        ✅ Ordem enviada com sucesso!
      </div>
    );
  }

  return (
    <div className="card-terminal" style={{ padding: "1rem", border: "1px solid #2a2a2a", borderRadius: "8px", background: "#0a0a0a" }}>
      <h3 style={{ marginBottom: "1rem", color: "#f59e0b" }}>Boleta de Compra</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ fontSize: "0.75rem", color: "#888" }}>Ativo</label>
          <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{acao?.ticker ?? "N/A"}</div>
        </div>

        <div>
          <label style={{ fontSize: "0.75rem", color: "#888" }}>Preço atual</label>
          <div style={{ fontSize: "1.1rem" }}>
            R$ {precoValido.toFixed(2)}
          </div>
        </div>

        <div>
          <label style={{ fontSize: "0.75rem", color: "#888", display: "block", marginBottom: "0.25rem" }}>
            Quantidade
          </label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="Ex: 100"
            min="1"
            style={{
              width: "100%",
              background: "#0d0d0d",
              border: "1px solid #333",
              color: "#e5e5e5",
              padding: "0.5rem",
              borderRadius: 4,
              fontFamily: "monospace",
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.75rem", color: "#888" }}>Total estimado</label>
          <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f59e0b" }}>
            R$ {total.toFixed(2)}
          </div>
        </div>

        <button
          onClick={handleCompra}
          style={{
            background: "#22c55e",
            color: "#000",
            border: "none",
            padding: "0.75rem",
            borderRadius: 4,
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          CONFIRMAR COMPRA
        </button>
      </div>
    </div>
  );
}