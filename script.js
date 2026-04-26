const container = document.querySelector(".container-grid");
const cardsData = [
  {
    titulo: "Guia Calibragem",
    descricao:
      "Padrões de PSI por veículo e cronograma de aferição para reduzir o desgaste prematuro.",
  },
  {
    titulo: "Guia Movimentação",
    descricao:
      "Passo a passo para registrar trocas de pneus entre eixos ou substituição por avaria.",
  },
  {
    titulo: "Guia Envio/Coleta Recapagem",
    descricao:
      "Como gerar guias de remessa, conferir números de fogo e registrar o retorno das bandas.",
  },
  {
    titulo: "Guia Lançamento de Nota",
    descricao:
      "Procedimento de entrada de NF-e no sistema para atualização imediata do estoque.",
  },
  {
    titulo: "Guia Compra de Materiais",
    descricao:
      "Fluxo de solicitação de insumos, desde válvulas e saca-núcleos até pneus novos.",
  },
  {
    titulo: "Guia Abertura de Chamado",
    descricao:
      "Como reportar falhas no sistema ou solicitar suporte técnico administrativo.",
  },
  {
    titulo: "Guia Impressão e Liberação",
    descricao:
      "Processo de autorização de pedidos e geração de documentos para saída de materiais.",
  },
  {
    titulo: "Emissão de Relatórios",
    descricao:
      "Como extrair dados de performance, CPK e inventário para análise da gerência.",
  },
];

// Usando map para transformar os dados em strings de HTML
const htmlCards = cardsData
  .map(
    (card) => `
    
  <div class="container">
    <h3>${card.titulo}</h3>
    <p>${card.descricao}</p>
  </div>
`,
  )
  .join(""); // O join('') remove as vírgulas entre os itens do array

// Insere tudo de uma vez no seu HTML
container.innerHTML = htmlCards;
