# TradeDesk — Home Broker Lab

Sistema de home broker desenvolvido para o **Lab de Refatoração de Código** da Web On Fire Academy.

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Rotas da aplicação

| Rota | Descrição |
|------|-----------|
| `/` | Home — destaques e status do mercado |
| `/acoes` | Lista de ações com cotações ao vivo |
| `/acoes/[ticker]` | Detalhe da ação e gráfico |
| `/acoes/[ticker]/boleta` | Formulário de compra |
| `/carteira` | Posições abertas |

## Rotas de API

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/acoes` | GET | Lista todas as ações |
| `/api/acoes/[ticker]` | GET | Dados de uma ação específica |
| `/api/mercado` | GET | Status do mercado (aberto/fechado) |
| `/api/ordens` | GET | Lista ordens registradas |
| `/api/ordens` | POST | Registra nova ordem |
| `/api/cotacao` | GET | **Leia com atenção antes de usar** |

## Sobre

Este sistema foi entregue por um estagiário que foi demitido.
Sua missão: encontrar e corrigir todos os problemas.

Boa sorte. 🔥
