"use client";

import { useState, useEffect } from "react";

export function MercadoStatus() {
  const [aberto, setAberto] = useState<boolean | null>(null);

  useEffect(() => {
    // Lógica executada exclusivamente no cliente/navegador
    const agora = new Date();
    const hora = agora.getHours();
    const diaDaSemana = agora.getDay(); // 0 = Domingo, 6 = Sábado

    // Considera mercado aberto entre 10h e 17h em dias úteis (Seg-Sex)
    const eDiaUtil = diaDaSemana >= 1 && diaDaSemana <= 5;
    const emHorario = hora >= 10 && hora < 17;

    setAberto(eDiaUtil && emHorario);
  }, []);

  return (
    <div 
      className="card-terminal" 
      style={{ 
        padding: "0.75rem 1rem", 
        border: "1px solid #2a2a2a", 
        borderRadius: "6px", 
        background: "#0a0a0a",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem"
      }}
    >
      <span style={{ fontSize: "0.85rem", color: "#888" }}>Status do Mercado:</span>
      {aberto === null ? (
        <span style={{ fontSize: "0.85rem", color: "#666" }}>Verificando...</span>
      ) : aberto ? (
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#22c55e" }}>
          ● ABERTO
        </span>
      ) : (
        <span style={{ fontSize: "0.85rem", fontWeight 700, color: "#ef4444" }}>
          ● FECHADO
        </span>
      )}
    </div>
  );
}

export default MercadoStatus;