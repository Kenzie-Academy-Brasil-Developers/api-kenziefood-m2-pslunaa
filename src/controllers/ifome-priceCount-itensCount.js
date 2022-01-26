const quantidade = document.getElementById("quantidade");
 console.log("quantidade ", quantidade);
const total = document.getElementById("preco");
const carrinho = document.querySelector(".carrinho")
const arrTest = [//array de teste
    {
        id              :   1,
        nome            :   'pizza',
        preco           :   20.00,
    },
    {
        id              :   1,
        nome            :   'hambuguer',
        preco           :   30.00,
    },
    {
        id              :   1,
        nome            :   'macarrão',
        preco           :   10.00,
    },
    {
        id              :   1,
        nome            :   'salgado',
        preco           :   5.50,
    },
    {
        id              :   1,
        nome            :   'salgado',
        preco           :   5.50,
    },
]

class Count{
    static cartFooter(arr){
        if(arr.length !== 0){
            const count = document.createElement('div');
            count.id    = 'count';
            count.classList.add('count');

            const quantidade = document.createElement('div');
            quantidade.id    = 'quantidade';
            quantidade.classList.add('quantidade');

            const preco = document.createElement('div');
            preco.id    = 'preco';
            preco.classList.add('preco');

            const quantidadeTXT = document.createElement('h4');
            quantidadeTXT.innerText = 'Quantidade'

            const precoTXT = document.createElement('h4');
            precoTXT.innerText = 'Total'

            quantidade.appendChild(quantidadeTXT);
            preco.appendChild(precoTXT);
            count.appendChild(quantidade);
            count.appendChild(preco);
            carrinho.appendChild(count);
        }
    }
    static itensCount(arr,local){//contador de produtos
        if(arr.length !==0){
           let contador = document.createElement('h4');
            contador.id  = 'itensCount'
            contador.classList.add('itensCount')
            contador.innerHTML = arr.length;
            local.appendChild(contador); 
        }
    }
    static priceCount(arr,local){//contador de produtos
        let preco = document.createElement('h4');
        preco.id  = 'precoCount'
        preco.classList.add('precoCount')
        let price = 0;
            for(let i=0; i < arr.length;i++){
                price += arr[i].preco
            }
        preco.innerText = `R$ ${price.toFixed(2).toString().replace(".", ",")}`;
        local.appendChild(preco);
    }
}

Count.cartFooter(arrTest);
Count.itensCount(arrTest,quantidade);
Count.priceCount(arrTest,total);

