const quantidade = document.getElementById("quantidade");
const total = document.getElementById("preco");
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
    static itensCount(arr,local){//contador de produtos
        let contador = document.createElement('h4');
        contador.id  = 'itensCount'
        contador.classList.add('itensCount')
        contador.innerHTML = arr.length;
        local.appendChild(contador);
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

Count.itensCount(arrTest,quantidade);
Count.priceCount(arrTest,total);

