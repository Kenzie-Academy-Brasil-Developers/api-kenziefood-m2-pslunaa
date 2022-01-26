import { KenzieFood } from "../controllers/ifome-controler.js";

// --- Variaveis Globais --- //

let valor = document.getElementById("campoPesquisa")
let array = []

valor.addEventListener("keyup", pesquisarProduto)

// --- Filtro de Categoria --- //

const menuNavegacao = document.querySelector(".categorias")
menuNavegacao.addEventListener("click", interceptadorMenuNavegacao)

function interceptadorMenuNavegacao(evento){
    console.log(evento)
    const ancora = evento.target
        if(ancora.tagName === "BUTTON"){
            if(ancora.innerText === "Todos"){
                const container = document.querySelector(".container")
                container.innerHTML = ""
                KenzieFood.getPublic().then(data => {
                    for(let i = 0; i < data.length; i++){
                        let valor = data[i];
                        let y = new CardProduto(valor);
                        y.cardConstrutor();
                    }
              });
            } else {
            KenzieFood.getPublic().then(data => {
                const container = document.querySelector(".container")
                container.innerHTML = ""
                array = data.filter((item) => {
                    return ((item.categoria).toLowerCase().indexOf(evento.target.innerText.toLowerCase()) > -1)
                });
                for(let i = 0; i < array.length; i++){
                    let valor = array[i];
                    let y = new CardProduto(valor);
                    y.cardConstrutor();
                }    
            }   
        )}
    }
}

// --- //


// Criação e Pesquisa no Input (Busca foi acrescentada) //
function pesquisarProduto() {

const container = document.querySelector(".container")
container.innerHTML = ""

    KenzieFood.getPublic().then(data => {
      if(valor.value != ""){
          array = data.filter((item) => {
              return ((item.nome).toLowerCase().indexOf(valor.value.toLowerCase()) > -1 || (item.categoria).toLowerCase().indexOf(valor.value.toLowerCase()) > -1) && item.nome
          });
        //   console.log(array)
          for(let i = 0; i < array.length; i++){
              let valor = array[i];
              let y = new CardProduto(valor);
              y.cardConstrutor();
          }
  } else {
      for(let i = 0; i < data.length; i++){
          let valor = data[i];
          let y = new CardProduto(valor);
          y.cardConstrutor();
      }
  }
});
}

// --- //

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
        addBtn.id                       =       "addBtn";
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

pesquisarProduto()

export{CardProduto};