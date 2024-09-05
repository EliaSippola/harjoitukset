import { getApiKey } from "./secret.js";

document.getElementById("button").addEventListener("click", () => getPay());

function getPay() {

    const button = document.getElementById("button");
    const amount = document.getElementById("amount");
    const hours = document.getElementById("hours");
    const date = document.getElementById("date");
    const country = document.getElementById("country");

    const res = document.getElementById("res");

    // style
    button.disabled = true;
    button.style.cursor = "wait";
    document.body.style.cursor = "wait";

    // check for empty
    if (amount.value == "" || hours.value == "" || date.value == "") {
        // style
        button.disabled = false;
        button.style.cursor = "auto";
        document.body.style.cursor = "auto";

        res.innerText = "Kaikkia kohtia ei ole asetettu!";
        return;
    }

    const dateArr = date.value.split("-");
    const url = `https://holidays.abstractapi.com/v1/?api_key=${getApiKey()}&country=${country.value}&year=${dateArr[0]}&month=${dateArr[1]}&day=${dateArr[2]}`

    httpGetAsync(url, (text) => showRes(text));
}

function showRes(text) {

    const button = document.getElementById("button");
    const amount = document.getElementById("amount");
    const hours = document.getElementById("hours");
    const res = document.getElementById("res");

    // style
    button.disabled = false;
    button.style.cursor = "auto";
    document.body.style.cursor = "auto";

    const holidays = JSON.parse(text);

    const isHoliday = holidays.length > 0;

    if (isHoliday) {
        res.innerText = amount.value * hours.value * 2 + " €";
    } else {
        res.innerText = amount.value * hours.value + " €";
    }

}

function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
