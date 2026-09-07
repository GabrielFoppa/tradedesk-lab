import { NextResponse } from "next/server";
import { ORDENS_MOCK } from "@/lib/mocks";

export async function GET() {
  try {
    return NextResponse.json(ORDENS_MOCK, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar a lista de ordens." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ticker, quantidade, preco, tipo } = body || {};

    // Validacao defensiva do corpo da requisicao
    if (!ticker || typeof ticker !== "string") {
      return NextResponse.json(
        { error: "Ticker inválido ou não fornecido." },
        { status: 400 }
      );
    }

    const qtdNumerica = Number(quantidade);
    if (isNaN(qtdNumerica) || qtdNumerica <= 0) {
      return NextResponse.json(
        { error: "A quantidade deve ser um número maior que zero." },
        { status: 400 }
      );
    }

    const precoNumerico = Number(preco);
    if (isNaN(precoNumerico) || precoNumerico <= 0) {
      return NextResponse.json(
        { error: "O preço deve ser um valor numérico válido maior que zero." },
        { status: 400 }
      );
    }

    const novaOrdem = {
      id: `ORD-${Date.now()}`,
      ticker: ticker.toUpperCase(),
      quantidade: qtdNumerica,
      preco: precoNumerico,
      total: qtdNumerica * precoNumerico,
      tipo: tipo || "compra",
      timestamp: new Date().toISOString(),
    };

    // Adiciona ao mock local para simulacao
    if (Array.isArray(ORDENS_MOCK)) {
      ORDENS_MOCK.push(novaOrdem as any);
    }

    return NextResponse.json(
      { message: "Ordem criada com sucesso!", ordem: novaOrdem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Falha ao processar a criação da ordem." },
      { status: 500 }
    );
  }
}