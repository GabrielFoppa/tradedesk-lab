"use client";

import type { Acao } from "@/types/acao";

interface PontoGrafico {
  data?: string;
  preco?: number;
}

interface GraficoAcaoProps {
  acao?: Acao;
  dados?: PontoGrafico[];
  precoAtual?: number;
  onPrecoAtualizado?: () => void;
}

export function GraficoAcao({ acao, dados = [], precoAtual, onPrecoAtualizado }: GraficoAcaoProps) {
  // Tratamento defensivo de valores para evitar crash com .toFixed()
  const precoValido = typeof precoAtual === "number" && !isNaN(precoAtual) 
    ? precoAtual 
    : (typeof acao?.preco === "number" && !isNaN(acao.preco) ? acao.preco : 0);

  // Pontos do gráfico simulado ou dados vindos via props
  const pontos = Array.isArray(dados) && dados.length > 0 
    ? dados 
    : [
        { data: "09:00", preco: 36.1 },
        { data: "10:30", preco: 37.4 },
        { data: "12:00", preco: 38.0 },
        { data: "13:30", preco: 37.8 },
        { data: "15:00", preco: 38.2 },
        { data: "16:30", preco: 38.5 },
        { data: "17:30", preco: 38.42 }
      ];

  return (
    <div className="card-terminal" style={{ padding: "1rem", border: "1px solid #2a2a2a", borderRadius: "8px", background: "#0a0a0a" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <span style={{ color: "#888", fontSize: "0.8rem", display: "block" }}>
            Histórico intraday {acao?.ticker ? `(${acao.ticker})` : "(simulado)"}
          </span>
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#22c55e" }}>
            R$ {precoValido.toFixed(2)}
          </span>
        </div>

        {onPrecoAtualizado && (
          <button 
            onClick={onPrecoAtualizado} 
            style={{ 
              background: "#1a1a1a", 
              border: "1px solid #333", 
              color: "#e5e5e5", 
              padding: "0.25rem 0.75rem", 
              borderRadius: 4, 
              cursor: "pointer", 
              fontSize: "0.75rem" 
            }}
          >
            Atualizar
          </button>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "80px" }}>
        {pontos.map((p, i) => {
          const valor = typeof p?.preco === "number" && !isNaN(p.preco) ? p.preco : 0;
          const altura = Math.min(Math.max(((valor - 35) / 4) * 80, 10), 80);
          
          const precoAnterior = i > 0 ? (pontos[i - 1]?.preco ?? 0) : valor;
          const cor = i === pontos.length - 1 
            ? "#f59e0b" 
            : (valor >= precoAnterior ? "#22c55e" : "#ef4444");

          return (
            <div 
              key={i} 
              style={{ 
                flex: 1, 
                background: cor, 
                height: `${altura}px`, 
                borderRadius: "2px 2px 0 0", 
                opacity: 0.8 
              }} 
              title={`${p?.data ?? `Ponto ${i + 1}`}: R$ ${valor.toFixed(2)}`}
            />
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem", fontSize: "0.7rem", color: "#555" }}>
        <span>09:00</span>
        <span>12:00</span>
        <span>17:30</span>
      </div>
    </div>
  );
}

export default GraficoAcao;