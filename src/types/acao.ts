// Os campos desta interface NÃO batem com o retorno real da API brapi.dev
// brapi retorna: symbol, shortName, regularMarketPrice, regularMarketChangePercent, regularMarketVolume, logourl
export interface Acao {
  ticker: string;    // brapi: symbol
  nome: string;      // brapi: shortName
  preco: number;     // brapi: regularMarketPrice — Bug B13
  variacao: number;  // brapi: regularMarketChangePercent
  volume: number;    // brapi: regularMarketVolume
  logo?: string;     // brapi: logourl
}
