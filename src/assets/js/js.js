const itens = document.getElementById('itens')
const teste = document.getElementById('test')

const itensNoCarrinho = [
  // {
  //   id: 1,
  //   nome: "Mousse de morango com a fruta",
  //   preco: 27.5,
  //   categoria: "Frutas",
  //   descricao:
  //     "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
  //   imagem:
  //     "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
  //   createdAt: "2022-01-24T16:25:25.401Z",
  //   updatedAt: "2022-01-24T16:25:25.401Z",
  // },
  // {
  //   id: 1,
  //   nome: "Mousse de morango com a fruta",
  //   preco: 27.5,
  //   categoria: "Frutas",
  //   descricao:
  //     "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
  //   imagem:
  //     "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
  //   createdAt: "2022-01-24T16:25:25.401Z",
  //   updatedAt: "2022-01-24T16:25:25.401Z",
  // },
  // {
  //   id: 1,
  //   nome: "Mousse de morango com a fruta",
  //   preco: 27.5,
  //   categoria: "Frutas",
  //   descricao:
  //     "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
  //   imagem:
  //     "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
  //   createdAt: "2022-01-24T16:25:25.401Z",
  //   updatedAt: "2022-01-24T16:25:25.401Z",
  // },
];

function ColocarItensNoCarrinhoDeCompra(){
    itens.innerHTML = "";
    for (let i = 0; i < itensNoCarrinho.length; i++) {
      const itensParaComprar = document.createElement("div");

      const imagemDaComida = document.createElement("img");
      imagemDaComida.src = itensNoCarrinho[i].imagem;
      imagemDaComida.classList.add("tamanhoDosProdutos");

      const divisao = document.createElement("section");

      const nomeDaComida = document.createElement("h2");
      nomeDaComida.innerText = itensNoCarrinho[i].nome;

      const categoriaComida = document.createElement("h3");
      categoriaComida.innerText = itensNoCarrinho[i].categoria;

      const precoComida = document.createElement("p");
      precoComida.innerText = `R$ ${itensNoCarrinho[i].preco.toFixed(2)}`.replace(".",",");

      divisao.appendChild(nomeDaComida);
      divisao.appendChild(categoriaComida);
      divisao.appendChild(precoComida);
      divisao.classList.add("textosNoCarrinho");

      itensParaComprar.appendChild(imagemDaComida);
      itensParaComprar.appendChild(divisao);
      itensParaComprar.classList.add("itensParaComprarStyle");

      itens.appendChild(itensParaComprar);
    }
}

teste.addEventListener("click", ColocarItensNoCarrinhoDeCompra);


function carrinhoVazio(){
    if(itensNoCarrinho.length === 0){
        let mensagemTotal = document.createElement('div')
        let ops = document.createElement('div')
        let mensagemCarrinhoVazio = document.createElement('section')
        let imgCarrinhoVazio = document.createElement('img')
        imgCarrinhoVazio.src = "./src/assets/imagens/shopping-bag.png"
        ops.innerText = "Ops!"
        mensagemCarrinhoVazio.innerText = "Por enquanto não temos produtos no carrinho"
        mensagemTotal.appendChild(imgCarrinhoVazio)
        mensagemTotal.appendChild(ops)
        mensagemTotal.appendChild(mensagemCarrinhoVazio)
        mensagemTotal.classList.add('styleCarrinhoVazio');
        itens.appendChild(mensagemTotal)
    }
}

carrinhoVazio()

