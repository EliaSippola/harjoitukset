let myButton = document.querySelector("button");
myButton.innerHTML = "Paina tästä";
let myText = document.querySelector(".message");

myButton.addEventListener("click", changeColor);
myText.addEventListener("click", changeColor);

function changeColor() {
    myText.style.color = "red";
}

let myGreet = document.getElementById("greeting");
let myName = document.getElementById("name");
let myCol = document.getElementById("go1");

function greetings() {
    let name = myName.value;
    myGreet.innerHTML = "Hei " + name + ".";
}

myCol.addEventListener("click", greetings);