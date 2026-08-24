import { NextResponse } from "next/server";
import { ACOES_MOCK } from "@/lib/mocks";

const TICKERS = "PETR4,VALE3,ITUB4,MGLU3,BBDC4";

export async function GET() {
  try {
    // Busca dados REAIS da brapi.dev — retorna campos: symbol, shortName, regularMarketPrice, regularMarketChangePercent, regularMarketVolume, logourl
    // O frontend usa: ticker, nome, preco, variacao, volume, logo — TODOS ERRADOS (Bug do campo)
    const res = await fetch(`https://brapi.dev/api/quote/${TICKERS}?fundamental=false`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("brapi offline");
    const data = await res.json();
    return NextResponse.json(data.results); // retorna brapi raw
  } catch {
    // fallback para mock quando brapi offline
    return NextResponse.json(ACOES_MOCK);
  }
}
