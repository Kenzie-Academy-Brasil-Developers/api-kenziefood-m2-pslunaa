const itens = document.getElementById('itens')
const teste = document.getElementById('test')

const itensNoCarrinho = []

function carrinhoVazio(){
    if(itensNoCarrinho.length === 0){
        let mensagemTotal = document.createElement('div')
        let ops = document.createElement('div')
        let mensagemCarrinhoVazio = document.createElement('section')
        let imgCarrinhoVazio = document.createElement('img')
        imgCarrinhoVazio.src = "./shopping-bag.png"
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

teste.addEventListener("click", function(){
    const mensagemCarrinhoVazio2 = document.createElement("div");
    itens.innerHTML = "";    
    if (itensNoCarrinho.length !== 0) {
      mensagemCarrinhoVazio2.innerText = "tem 1 item no carrinho";
      itens.appendChild(mensagemCarrinhoVazio2);
    }
})
