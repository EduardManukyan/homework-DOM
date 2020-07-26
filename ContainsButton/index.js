const todoForm = document.querySelector(".todo-form")
const submitButton = document.querySelector(".submit-button")

submitButton.addEventListener("click", () => {
    let data = new Date();
    let houer = data.getHours()< 10 ? "0" + data.getHours() : data.getHours();
    let minuts = data.getMinutes() < 10? "0" + data.getMinutes() : data.getMinutes();
    let seconds = data.getSeconds() < 10? "0" + data.getSeconds() : data.getSeconds();
    let timeContainer = document.querySelector("#time-container")
    let houMinSec = `${houer}:${minuts}:${seconds}`
    timeContainer.innerHTML = houMinSec


})
console.log(submitButton)