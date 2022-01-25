class CardProduto { //modelador de produtos na tela
    constructor(id,nome,imagem,categoria,descricao,preco){
        this.id                =       id
        this.nome              =       nome;
        this.imagem            =       imagem;
        this.categoria         =       categoria;
        this.descricao         =       descricao;
        this.preco             =       preco;
    }
    cardConstrutor(){ //construtor do card dos produtos
        const main                      =       document.getElementById("ambiente-teste");
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
        main.appendChild(produtoBox);        
    }
}




const calabresa = new CardProduto (25,'calabresa'
,'https://i.pinimg.com/564x/2b/db/d4/2bdbd4b9a187d87baf00296db340dc82.jpg'
,'Panificadora'
,'Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita'
,`R$ 19,50`
)
calabresa.cardConstrutor();
const queijo  = new CardProduto (25,'calabresa'
,'https://i.pinimg.com/564x/2b/db/d4/2bdbd4b9a187d87baf00296db340dc82.jpg'
,'Panificadora'
,'Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita'
,`R$ 19,50`
)
queijo.cardConstrutor();

