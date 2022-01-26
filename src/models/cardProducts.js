import { KenzieFood } from "../controllers/ifome-controler.js";

const itensNoCarrinho = [];

KenzieFood.getPublic().then(data => {
    
    for(let i = 0; i < data.length; i++){
        let x = data[i];
        let y = new CardProduto(x);
        y.cardConstrutor();
        const botao = document.getElementsByClassName("addBtn")[i]
        botao.addEventListener("click", () => {
        itensNoCarrinho.push(data[i])
        ColocarItensNoCarrinhoDeCompra()        
});
}
})

const container = document.querySelector(".container")

class CardProduto { //modelador de produtos na tela
    constructor({id,nome,imagem,categoria,descricao,preco}){
        this.id                =       id
        this.nome              =       nome;
        this.imagem            =       imagem;
        this.categoria         =       categoria;
        this.descricao         =       descricao;
        this.preco             =       preco;
    }
    cardConstrutor(){ //construtor do card dos produtos
        let produtoBox                  =       document.createElement("div");
        produtoBox.id                   =        "produtoBox";
        produtoBox.classList.add('produtoBox');

        let imgBox                      =       document.createElement("img");
        imgBox.id                       =       "pizza";
        imgBox.src                      =       this.imagem;
        imgBox.classList.add('imgBox');

        let produtoType                 =       document.createElement("div");
        produtoType.id                  =       `type_${this.categoria}`
        produtoType.innerText           =       `${this.categoria}`;
        produtoType.classList.add(`type_${this.categoria}`);
        
        let produtoNome                 =       document.createElement("h2");
        produtoNome.id                  =       "produtoNome";
        produtoNome.innerText           =       `${this.nome}`;
        produtoNome.classList.add("produtoNome");
        

        let produtoDescricao            =       document.createElement("h2");
        produtoDescricao.id             =       "produtoDescricao"
        produtoDescricao.innerText      =       `${this.descricao}`;
        produtoDescricao.classList.add("produtoDescricao");

        let produtoPreco                =       document.createElement("h2");
        produtoPreco.id                 =       "produtoPreco";
        produtoPreco.innerText          =       `${this.preco}`;
        produtoPreco.classList.add("produtoPreco");

        let addBtn                      =       document.createElement("button");
        addBtn.classList.add("addBtn");
        

        produtoBox.appendChild(imgBox);
        produtoBox.appendChild(produtoType);
        produtoBox.appendChild(produtoNome);
        produtoBox.appendChild(produtoDescricao);
        produtoBox.appendChild(produtoPreco);
        produtoBox.appendChild(addBtn);
        container.appendChild(produtoBox);        
    }
}

function ColocarItensNoCarrinhoDeCompra() {
  itens.innerHTML = "";
  for (let i = 0; i < itensNoCarrinho.length; i++) {
    const itensParaComprar = document.createElement("div");

    const imagemDaComida = document.createElement("img");
    imagemDaComida.src = itensNoCarrinho[i].imagem;
    imagemDaComida.classList.add("tamanhoDosProdutos");

    const BoExcluir = document.createElement("button");
    BoExcluir.classList.add('excluir')
    
    BoExcluir.addEventListener("click", (evt) => {
        let x = evt.target.parentElement
        x.remove()
        console.log(itensNoCarrinho[2].id)
        console.log(x)
        carrinhoVazio()
        for(let i = 0; i < itensNoCarrinho.length; i++){ 
            if(itensNoCarrinho[i] === x){
                console.log("oi")
            }
        }
    })

    const divisao = document.createElement("section");

    const nomeDaComida = document.createElement("h2");
    nomeDaComida.innerText = itensNoCarrinho[i].nome;

    const categoriaComida = document.createElement("h3");
    categoriaComida.innerText = itensNoCarrinho[i].categoria;

    const precoComida = document.createElement("p");
    precoComida.innerText = `R$ ${itensNoCarrinho[i].preco.toFixed(2)}`.replace(
      ".",
      ","
    );

    divisao.appendChild(nomeDaComida);
    divisao.appendChild(categoriaComida);
    divisao.appendChild(precoComida);
    divisao.classList.add("textosNoCarrinho");

    itensParaComprar.appendChild(imagemDaComida);
    itensParaComprar.appendChild(divisao);
    itensParaComprar.appendChild(BoExcluir)
    itensParaComprar.classList.add("itensParaComprarStyle");

    itens.appendChild(itensParaComprar);
  }
}

const itens = document.getElementById("itens");

function carrinhoVazio() {
  if (itensNoCarrinho.length === 0) {
    let mensagemTotal = document.createElement("div");
    let ops = document.createElement("div");
    let mensagemCarrinhoVazio = document.createElement("section");
    let imgCarrinhoVazio = document.createElement("img");
    imgCarrinhoVazio.src = "./src/assets/imagens/shopping-bag.png";
    ops.innerText = "Ops!";
    mensagemCarrinhoVazio.innerText =
      "Por enquanto não temos produtos no carrinho";
    mensagemTotal.appendChild(imgCarrinhoVazio);
    mensagemTotal.appendChild(ops);
    mensagemTotal.appendChild(mensagemCarrinhoVazio);
    mensagemTotal.classList.add("styleCarrinhoVazio");
    itens.appendChild(mensagemTotal);
  }
}

carrinhoVazio()
