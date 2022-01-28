import { RotaProduct } from "../../controllers/rotaController";
const corpo = document.querySelector("body");

corpo.addEventListener("submit", pegarDadosInput);

function pegarDadosInput(event){
    event.preventDefault()
    let inputs = event.target
    let dataForm = {}

    for(let i = 0; i < inputs.length-1; i++){
        const {name, value} = inputs[i];
        dataForm[name] = value;
    }

    RotaProduct.post(dataForm)
}