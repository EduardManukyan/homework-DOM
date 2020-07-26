const inputText=document.querySelector("#input-text")
const spanText=document.querySelector("#span-text")
inputText.addEventListener("keyup",(event)=>{
    console.log('sadsad')
    spanText.innerHTML = event.target.value;
})