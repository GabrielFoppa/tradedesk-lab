import type { Acao } from "@/types/acao";
import type { Ordem } from "@/types/ordem";

// array de acoes exportado direto, mais facil de acessar em qualquer lugar
export const ACOES_MOCK: Acao[] = [
  { ticker: "PETR4", nome: "Petrobras PN N2", preco: 38.42, variacao: -1.23, volume: 42831900 },
  { ticker: "VALE3", nome: "Vale ON NM", preco: 61.80, variacao: 0.87, volume: 31200000 },
  { ticker: "ITUB4", nome: "Itaú Unibanco PN", preco: 34.55, variacao: 0.32, volume: 28900000 },
  { ticker: "MGLU3", nome: "Magazine Luiza ON NM", preco: 7.21, variacao: -3.40, volume: 89500000 },
  { ticker: "BBDC4", nome: "Bradesco PN N1", preco: 12.88, variacao: 1.15, volume: 19800000 },
];

export const ORDENS_MOCK: Ordem[] = [];
