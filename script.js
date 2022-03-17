//console.log("hello world!!")
let headingelement=document.getElementById("heading")
//console.log(headingelement.textContent)
let buttonelement = document.getElementById("btn");
 buttonelement.addEventListener("click",btnclk)
function btnclk(){
    headingelement.textContent="hello js"

}