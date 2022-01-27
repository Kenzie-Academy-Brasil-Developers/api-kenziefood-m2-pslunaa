const postBtn = document.querySelector(".post");
const modalPost = document.querySelector(".modal-post");
const patchBtn = document.querySelector(".patch");
const modalPatch = document.querySelector(".modal-patch");
const deleteBtn = document.querySelector(".delete");
const modalDelete = document.querySelector(".modal-delete");

postBtn.addEventListener("click", function(){
    modalPost.classList.add('mod-post-active');
})
patchBtn.addEventListener("click", function(){
    modalPatch.classList.add('mod-patch-active');
})
deleteBtn.addEventListener("click", function(){
    modalDelete.classList.add('mod-delete-active');
})