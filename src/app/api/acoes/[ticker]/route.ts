import { NextResponse } from "next/server";
import { ACOES_MOCK } from "@/lib/mocks";

interface RouteParams {
  params: Promise<{ ticker: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { ticker } = await params;

    if (!ticker) {
      return NextResponse.json(
        { error: "Ticker não fornecido." },
        { status: 400 }
      );
    }

    const tickerUpper = ticker.toUpperCase();
    const acao = ACOES_MOCK.find((a: any) => {
      const simbolo = a?.ticker || a?.symbol || "";
      return String(simbolo).toUpperCase() === tickerUpper;
    });

    if (!acao) {
      return NextResponse.json(
        { error: `Ação com ticker ${tickerUpper} não encontrada.` },
        { status: 404 }
      );
    }

    return NextResponse.json(acao, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno ao processar a requisição da ação." },
      { status: 500 }
    );
  }
}