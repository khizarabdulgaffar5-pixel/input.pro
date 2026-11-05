let inp = document.getElementById("name");
let cont = document.getElementById("content");
let btn = document.getElementById("submit");


btn.addEventListener("click", function(){
    cont.textContent= inp.value
})