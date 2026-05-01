const container = document.querySelector(".container-grid");
const cardsData = [
  {
    link: "https://docs.google.com/document/d/1c2_VUGzoS8Fq9jg4IQWYGoQCDlZuOX-rdW-iuvhuMyQ/edit?tab=t.rhrdtly363u",
    titulo: "Guia Calibragem",
    descricao:
      "Padrões de PSI por veículo e cronograma de aferição para reduzir o desgaste prematuro.",
  },
  {
    link: "https://docs.google.com/document/d/1c2_VUGzoS8Fq9jg4IQWYGoQCDlZuOX-rdW-iuvhuMyQ/edit?tab=t.95hwu43nf90j",
    titulo: "Guia Movimentação",
    descricao:
      "Passo a passo para registrar trocas de pneus entre eixos ou substituição por avaria.",
  },
  {
    link: "https://docs.google.com/document/d/1c2_VUGzoS8Fq9jg4IQWYGoQCDlZuOX-rdW-iuvhuMyQ/edit?tab=t.xwcbcw7odl2k",
    titulo: "Guia Envio/Coleta Recapagem",
    descricao:
      "Como gerar guias de remessa, conferir números de fogo e registrar o retorno das bandas.",
  },
  {
    link: "https://docs.google.com/document/d/1c2_VUGzoS8Fq9jg4IQWYGoQCDlZuOX-rdW-iuvhuMyQ/edit?tab=t.23v93ouns2s3",
    titulo: "Guia Lançamento de Nota",
    descricao:
      "Procedimento de entrada de NF-e no sistema para atualização imediata do estoque.",
  },
  {
    link: "https://docs.google.com/document/d/1c2_VUGzoS8Fq9jg4IQWYGoQCDlZuOX-rdW-iuvhuMyQ/edit?tab=t.ocv4qgel6lxo",
    titulo: "Guia Compra de Materiais",
    descricao:
      "Fluxo de solicitação de insumos, desde válvulas e saca-núcleos até pneus novos.",
  },
  {
    link: "",
    titulo: "Guia Abertura de Chamado",
    descricao:
      "Como reportar falhas no sistema ou solicitar suporte técnico administrativo.",
  },
  {
    link: "",
    titulo: "Guia Impressão e Liberação",
    descricao:
      "Processo de autorização de pedidos e geração de documentos para saída de materiais.",
  },
  {
    link: "",
    titulo: "Emissão de Relatórios",
    descricao:
      "Como extrair dados de performance, CPK e inventário para análise da gerência.",
  },
];

// Usando map para transformar os dados em strings de HTML
const htmlCards = cardsData
  .map(
    (card) => `
  <a href="${card.link}" target="_blank">
  <div class="container">
    <h3>${card.titulo}</h3>
    <p>${card.descricao}</p>
  </div>
  </a>
`,
  )
  .join(""); // O join('') remove as vírgulas entre os itens do array

// Insere tudo de uma vez no seu HTML
container.innerHTML = htmlCards;
