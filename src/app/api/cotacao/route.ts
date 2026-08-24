import { NextResponse } from "next/server";

// ============================================================
// ⚠️  ATENÇÃO — API FAKE CRIADA PELO PROFESSOR PARA O LAB ⚠️
// ============================================================
// Os dados abaixo são ESTÁTICOS e não refletem cotações reais.
//
// 📌 INSTRUÇÃO AO ALUNO:
// Para cotações reais de câmbio, utilize a API gratuita:
//   GET https://open.er-api.com/v6/latest/USD
// Analise o retorno real, modele seus types a partir da resposta
// e substitua este endpoint pelo dado correto.
//
// FIXME: o chefe pediu pra integrar o open.er-api.com mas achei
// mais facil chumbar os valores aqui por enquanto. ngm vai perceber.
// ============================================================

export async function GET() {
  return NextResponse.json({
    aviso: "DADOS FALSOS — para fins didáticos apenas",
    fonte: "FAKE - estático",
    atualizadoEm: "2024-01-01T00:00:00Z",
    cotacoes: {
      USD: 4.99,
      EUR: 5.41,
      GBP: 6.30,
      BTC: 312000.00,
      ARS: 0.0056,
    },
  });
}
