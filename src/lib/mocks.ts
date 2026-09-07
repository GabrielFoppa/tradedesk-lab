export interface Acao {
  ticker: string;
  nome?: string;
  preco: number;
}

export interface OrdemMock {
  id: string;
  ticker: string;
  quantidade: number;
  preco: number;
  total: number;
  tipo: "compra" | "venda";
  timestamp: string;
}

export const ACOES_MOCK: Acao[] = [
  {
    ticker: "PETR4",
    nome: "Petróleo Brasileiro S.A.",
    preco: 38.42,
  },
  {
    ticker: "VALE3",
    nome: "Vale S.A.",
    preco: 62.15,
  },
  {
    ticker: "ITUB4",
    nome: "Itaú Unibanco Holding S.A.",
    preco: 33.80,
  },
  {
    ticker: "BBDC4",
    nome: "Banco Bradesco S.A.",
    preco: 14.25,
  },
  {
    ticker: "WEGE3",
    nome: "WEG S.A.",
    preco: 41.10,
  },
];

export const ORDENS_MOCK: OrdemMock[] = [
  {
    id: "ORD-1001",
    ticker: "PETR4",
    quantidade: 100,
    preco: 38.42,
    total: 3842.0,
    tipo: "compra",
    timestamp: "2026-09-07T10:30:00Z",
  },
  {
    id: "ORD-1002",
    ticker: "VALE3",
    quantidade: 200,
    preco: 62.15,
    total: 12430.0,
    tipo: "compra",
    timestamp: "2026-09-07T11:15:00Z",
  },
];