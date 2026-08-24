// ============================================================
// ATENCAO - API FAKE CRIADA PELO PROFESSOR PARA O LAB
// ============================================================
// Os dados abaixo sao ESTATICOS e nao refletem cotacoes reais.
//
// FIXME: o chefe pediu pra integrar o open.er-api.com mas achei
// mais facil chumbar os valores aqui por enquanto. ngm vai perceber.
// ============================================================

export async function GET() {
  const body = JSON.stringify({
    aviso: "DADOS FALSOS - apenas para fins didaticos",
    instrucoes: {
      descricao: "Substitua este endpoint por dados reais de cambio",
      api_gratuita: "https://open.er-api.com/v6/latest/USD",
      autenticacao: "nenhuma - a API e completamente gratuita e sem token",
      como_usar: [
        "1. No route.ts deste endpoint, faca: const res = await fetch('https://open.er-api.com/v6/latest/USD')",
        "2. Leia o JSON retornado: res.rates contem as taxas em relacao ao USD",
        "3. Exemplo: data.rates.BRL retorna quantos BRL valem 1 USD",
        "4. Adapte o retorno para o formato que o frontend espera",
      ],
      exemplo_resposta_real: {
        base_code: "USD",
        rates: { BRL: 4.99, EUR: 0.92, GBP: 0.79 },
      },
    },
    fonte: "FAKE - estatico",
    atualizadoEm: "2024-01-01T00:00:00Z",
    cotacoes: {
      USD: 4.99,
      EUR: 5.41,
      GBP: 6.30,
      BTC: 312000.00,
      ARS: 0.0056,
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
