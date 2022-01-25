const itens = document.getElementById('itens')
const teste = document.getElementById('test')

const itensNoCarrinho = [];

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
        imgCarrinhoVazio.src = "./Image/shopping-bag.png"
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

