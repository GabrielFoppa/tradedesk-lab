import { NextResponse } from "next/server";

export async function GET() {
  // Bug B11: usa horário local do servidor sem timezone definido
  // B3 hora de Brasília = UTC-3, mas new Date().getHours() usa o timezone do servidor
  const hora = new Date().getHours(); // Bug B11: deveria usar timezone de Brasília

  // Horário de funcionamento da B3: 10h–17h30 (horário de Brasília)
  const abertura = 10;
  const fechamento = 17;

  const isAberto = hora >= abertura && hora < fechamento;

  return NextResponse.json({
    status: isAberto ? "aberto" : "fechado",
    hora: hora,
    mensagem: isAberto
      ? `Mercado aberto — ${hora}h`
      : `Mercado fechado — abre às ${abertura}h`,
    abertura,
    fechamento,
  });
}
