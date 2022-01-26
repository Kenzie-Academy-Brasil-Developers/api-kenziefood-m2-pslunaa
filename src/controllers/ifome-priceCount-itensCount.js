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
            let count = document.createElement('div');
            count.id    = 'count';
            count.classList.add('count');

            let quantidade = document.createElement('div');
            quantidade.id    = 'quantidade';
            quantidade.classList.add('quantidade');
             
            let preco = document.createElement('div');
            preco.id    = 'preco';
            preco.classList.add('preco');

            let quantidadeTXT = document.createElement('h4');
            quantidadeTXT.innerText = 'Quantidade'

            let precoTXT = document.createElement('h4');
            precoTXT.innerText = 'Total'

            let contador = document.createElement('h4');
            contador.id  = 'itensCount'
            contador.classList.add('itensCount')
            contador.innerHTML = arr.length;

            let precoTotal = document.createElement('h4');
            precoTotal.id  = 'precoCount'
            precoTotal.classList.add('precoCount')
            let price = 0;
            console.log('hwllo')
                for(let i=0; i < arr.length;i++){
                    price += arr[i].preco
                }
            precoTotal.innerHTML = `R$ ${price.toFixed(2).toString().replace(".", ",")}`;

            quantidade.appendChild(quantidadeTXT);
            quantidade.appendChild(contador)
            preco.appendChild(precoTXT);
            preco.appendChild(precoTotal);
            count.appendChild(quantidade);
            count.appendChild(preco);
            carrinho.appendChild(count);
        }
    }
}
Count.cartFooter(arrTest);


