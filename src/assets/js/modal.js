const postBtn = document.querySelector(".post");
const modalPost = document.querySelector(".modal-post");
const patchBtn = document.querySelector(".patch");
const modalPatch = document.querySelector(".modal-patch");
const deleteBtn = document.querySelector(".delete");
const modalDelete = document.querySelector(".modal-delete");

const queroFecharPost = document.getElementById("queroFecharPost");
const queroFecharPatch = document.getElementById("queroFecharPatch");
const queroFecharDelete = document.getElementById("queroFecharDelete");

//inputs Posts
const nomePost = document.getElementById("nomePost");
const descricaoPost = document.getElementById("descricaoPost");
const precoPost = document.getElementById("precoPost");
const categoriaPost = document.getElementById("categoriaPost");

//inputs Patch
const produtoPatch = document.getElementById("produto-patch"); 
const produtoIdPatch = document.getElementById("produto-id-patch"); 
const descricaoPatch = document.getElementById("descricao-patch"); 
const precoPatch = document.getElementById("preco-patch"); 
const imagemPatch = document.getElementById("imagem-patch"); 

//input Delete
const IDDelete = document.getElementById("IDDelete");

queroFecharPost.addEventListener("click", () => {
    modalPost.classList.remove('mod-post-active');
})

queroFecharPatch.addEventListener("click", () => {
    modalPatch.classList.remove('mod-patch-active');    
})

queroFecharDelete.addEventListener("click", () => {
    modalDelete.classList.remove('mod-delete-active');    
})

postBtn.addEventListener("click", function(){
    modalPost.classList.add('mod-post-active');
})
patchBtn.addEventListener("click", function(){
    modalPatch.classList.add('mod-patch-active');
})
deleteBtn.addEventListener("click", function(){
    modalDelete.classList.add('mod-delete-active');
})

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

    console.log(dataForm)
}