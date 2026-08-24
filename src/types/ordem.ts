export interface Ordem {
  id: string;
  ticker: string;
  quantidade: number;
  preco: number;
  total: number;
  tipo: "compra" | "venda";
  timestamp: string;
}
