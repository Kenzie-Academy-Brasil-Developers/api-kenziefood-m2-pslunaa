import { KenzieFood } from "../controllers/ifome-controler.js";
import { cartFooter } from "../controllers/ifome-priceCount-itensCount.js";


function storage (){
    return JSON.parse(localStorage.getItem('carrinho'));
}

let carrinho = storage();

let itensNoCarrinho = (carrinho !== null) ? carrinho : [];
let salvaProdutos = [];


//Consumindo API e salvando itens num array;

KenzieFood.getPublic().then(data => {
    for(let i = 0; i < data.length; i++){
        salvaProdutos.push(data[i])
        let criaProduto = new CardProduto(data[i]);
        criaProduto.cardConstrutor();
        const botao = document.getElementsByClassName("addBtn")[i]
        botao.addEventListener("click", () => {
        itensNoCarrinho.push(data[i])
        cartFooter(itensNoCarrinho)
        localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
        ColocarItensNoCarrinhoDeCompra()
        });
    }
})

KenzieFood.getPrivate().then(data => {
    if(data.length !== 0){
        for(let i = 0; i < data.length; i++){
            salvaProdutos = [...salvaProdutos, data[i]];
            let criaProduto = new CardProduto(data[i]);
            criaProduto.cardConstrutor();
            const botao = document.getElementsByClassName("addBtn")[i]
            botao.addEventListener("click", () => {
            itensNoCarrinho.push(data[i])
            cartFooter(itensNoCarrinho)
            localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
            ColocarItensNoCarrinhoDeCompra()
            });
        }
    }    
})

//Variaveis Globais
let termo = document.getElementById("campoPesquisa")
termo.addEventListener("keyup", pesquisarProduto)

//Filtro de Categoria

const menuNavegacao = document.querySelector(".categorias")
menuNavegacao.addEventListener("click", interceptadorMenuNavegacao)

function interceptadorMenuNavegacao(evento){
    const ancora = evento.target
    if(ancora.tagName === "BUTTON"){
        if(ancora.innerText === "Todos"){
            const container = document.querySelector(".container")
            container.innerHTML = ""
            for(let i = 0; i < salvaProdutos.length; i++){
                let criandoProduto = new CardProduto(salvaProdutos[i]);
                criandoProduto.cardConstrutor();
                const botao = document.getElementsByClassName("addBtn")[i]
                botao.addEventListener("click", () => {
                itensNoCarrinho.push(criandoProduto)
                cartFooter(itensNoCarrinho)
                localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
                ColocarItensNoCarrinhoDeCompra()        
                });
            }     
        }else{
            const container = document.querySelector(".container")
            container.innerHTML = ""
            let vitrineFiltrada = salvaProdutos.filter((item) => {
                return ((item.categoria).toLowerCase().indexOf(evento.target.innerText.toLowerCase()) > -1)
                });
            for(let i = 0; i < vitrineFiltrada.length; i++){
                let criandoProduto = new CardProduto(vitrineFiltrada[i]);
                criandoProduto.cardConstrutor();
                const botao = document.getElementsByClassName("addBtn")[i]
                botao.addEventListener("click", () => {
                    itensNoCarrinho.push(criandoProduto)
                    cartFooter(itensNoCarrinho)
                    localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
                    ColocarItensNoCarrinhoDeCompra()        
                });
            }    
        }   
    }
}

// Filtro campo de pesquisa

function pesquisarProduto() {
    const container = document.querySelector(".container")
    container.innerHTML = ""
    let vitrineFiltrada = salvaProdutos.filter((item) => {
        return ((item.nome).toLowerCase().indexOf(termo.value.toLowerCase()) > -1 || (item.categoria).toLowerCase().indexOf(termo.value.toLowerCase()) > -1) && item.nome
    });

    if(termo.value != ""){          
        for(let i = 0; i < vitrineFiltrada.length; i++){
            let criandoProduto = new CardProduto(vitrineFiltrada[i]);
            criandoProduto.cardConstrutor();
            const botao = document.getElementsByClassName("addBtn")[i]
            botao.addEventListener("click", () => {
            itensNoCarrinho.push(criandoProduto)
            cartFooter(itensNoCarrinho)
            localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
            ColocarItensNoCarrinhoDeCompra()        
            });
        }
    }else{
        for(let i = 0; i < vitrineFiltrada.length; i++){
            let criandoProduto = new CardProduto(vitrineFiltrada[i]);
            criandoProduto.cardConstrutor();
            const botao = document.getElementsByClassName("addBtn")[i]
                botao.addEventListener("click", () => {
                itensNoCarrinho.push(criandoProduto)
                cartFooter(itensNoCarrinho)
                localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
                ColocarItensNoCarrinhoDeCompra()       
                });
        }
    }
}

//Template de produtos (Já faz o append no HTML);

const container = document.querySelector(".container")

class CardProduto { 
    constructor({id,nome,imagem,categoria,descricao,preco}){
        this.id        = id;
        this.nome      = nome;
        this.imagem    = imagem;
        this.categoria = categoria;
        this.descricao = descricao;
        this.preco     = preco;
    }

    cardConstrutor(){
        let produtoBox = document.createElement("div");
        produtoBox.classList.add('produtoBox');

        let imgBox = document.createElement("img");
        imgBox.src = this.imagem;
        imgBox.classList.add('imgBox');

        let produtoType       = document.createElement("div");
        produtoType.id        = `type_${this.categoria}`
        produtoType.innerText = `${this.categoria}`;
        produtoType.classList.add(`type_${this.categoria}`);
        
        let produtoNome       = document.createElement("h2");
        produtoNome.innerText = `${this.nome}`;
        produtoNome.classList.add("produtoNome");
        
        let produtoDescricao       = document.createElement("h2");
        produtoDescricao.innerText = `${this.descricao}`;
        produtoDescricao.classList.add("produtoDescricao");

        let produtoPreco       = document.createElement("h2");
        produtoPreco.innerText = `R$ ${this.preco.toFixed(2).toString().replace(".", ",")}`;
        produtoPreco.classList.add("produtoPreco");

        let addBtn = document.createElement("button");
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
  let itens = document.getElementById("itens");
  itens.innerHTML = "";

  for (let i = 0; i < itensNoCarrinho.length; i++) {
    const itensParaComprar = document.createElement("div");
    itensParaComprar.id = itensNoCarrinho[i].id

    const imagemDaComida = document.createElement("img");
    imagemDaComida.src = itensNoCarrinho[i].imagem;
    imagemDaComida.classList.add("tamanhoDosProdutos");

    const imgExcluir = document.createElement('img')
    imgExcluir.src = './src/assets/imagens/trash.png'
    imgExcluir.classList.add('imgExcluir')

    const BoExcluir = document.createElement("button");
    BoExcluir.classList.add('excluir')
    
    BoExcluir.appendChild(imgExcluir)

    BoExcluir.addEventListener("click", (evt) => {
      let botaoExcluir = evt.target
      if(botaoExcluir.tagName === "BUTTON"){
        let elementoSelecionado = botaoExcluir.parentNode
        let nomeProduto = elementoSelecionado.childNodes[1].childNodes[0].innerText
        
        let index = itensNoCarrinho.indexOf(itensNoCarrinho.find(e => e.nome === nomeProduto))
        itensNoCarrinho.splice(index, 1)
        ColocarItensNoCarrinhoDeCompra()
        cartFooter(itensNoCarrinho)
        localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
        carrinhoVazio()
      } else {
        let imgExcluir = evt.target.parentNode.parentNode
        let nomeProduto = imgExcluir.childNodes[1].childNodes[0].innerText;

        let index = itensNoCarrinho.indexOf(
          itensNoCarrinho.find((e) => e.nome === nomeProduto)
        );
        itensNoCarrinho.splice(index, 1);
        ColocarItensNoCarrinhoDeCompra();
        cartFooter(itensNoCarrinho)
        localStorage.setItem('carrinho', JSON.stringify(itensNoCarrinho));
        carrinhoVazio();
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
cartFooter(itensNoCarrinho)
// pesquisarProduto()

export{CardProduto};


// LocalStorage
