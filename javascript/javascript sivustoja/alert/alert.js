function openAlert(alertText) {
    const backround = document.createElement("div");
    //const container = document.createElement("div");
    const alert = document.createElement("div");
    const text = document.createElement("p");
    const button = document.createElement("button");

    backround.appendChild(alert);
    alert.appendChild(text);
    alert.appendChild(button);

    backround.classList.add("alert-backround");
    alert.classList.add("alert-box");
    text.classList.add("alert-text");
    button.classList.add("alert-button");

    text.innerText = alertText;
    button.innerText = "Ok";

    document.body.appendChild(backround);

    document.querySelector(".alert-button").addEventListener("click", closeAlert);
}

function closeAlert() {
    document.querySelector(".alert-backround").remove();
}