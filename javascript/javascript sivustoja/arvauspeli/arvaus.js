document.getElementById("go3").addEventListener("click", teht3);
document.getElementById("uudelleen").addEventListener("click", uudelleen);

let arv = "";
let tries = 0;
let rand;
const vast = document.getElementById("t3v");

function teht3() {
    let t3i1 = 100;
    let t3i2 = 1;
    let t3i3 = document.getElementById("t3i3").value;

    if (tries > 4) {
        return;
    }

    // vääränlaiset luvut
    if (t3i3 == "") {
        vast.style.backgroundColor = "red";
        document.getElementById("t3v").innerHTML = "Sinun täytyy kirjoittaa arvauksesi, että voin verrata sitä lukuun";
        document.getElementById("t3i3").value = "";
        document.getElementById("t3i3").focus();
        document.getElementById("t3v").style.display = "block";
        return
    } else if (isNaN(t3i3)) {
        vast.style.backgroundColor = "red";
        document.getElementById("t3v").innerHTML = "Ajattelen lukuja, en kirjaimia";
        document.getElementById("t3i3").value = "";
        document.getElementById("t3i3").focus();
        return
    } else if (Number(t3i3) > Number(t3i1)) {
        vast.style.backgroundColor = "red";
        document.getElementById("t3v").innerHTML = "En ajattele lukua joka on suurempi kuin 100";
        document.getElementById("t3i3").value = "";
        document.getElementById("t3i3").focus();
        return
    } else if (Number(t3i3) < Number(t3i2)) {
        vast.style.backgroundColor = "red";
        document.getElementById("t3v").innerHTML = "En ajattele lukua joka on pienempi kuin 1";
        document.getElementById("t3i3").value = "";
        document.getElementById("t3i3").focus();
        return
    }

    if (tries == 0) {
        rand = Math.ceil(Math.random() * (Number(t3i1)-Number(t3i2)+1)) + Number(t3i2)-1;
        console.log(rand);

        document.getElementById("t3v").style.display = "block";
    }

    if (tries < 4) {

        if (Number(t3i3) == rand) {
            arv += " " + t3i3;
            vast.style.backgroundColor = "green";
            document.getElementById("t3v").innerHTML = "Oikein!";
            endGame(true);
            tries = 10;
        }

        if (t3i3 < rand) {
            arv += " " + t3i3;
            vast.style.backgroundColor = "red";
            document.getElementById("t3v").innerHTML = "Väärin! Lukuni oli suurempi! Sinulla on " + (5 - Number(tries) - 1) + " yritystä jäljellä.";
        } else if (t3i3 > rand) {
            arv += " " + t3i3;
            vast.style.backgroundColor = "red";
            document.getElementById("t3v").innerHTML = "Väärin! Lukuni oli pienempi! Sinulla on " + (5 - Number(tries) - 1) + " yritystä jäljellä.";
        }

        tries += 1;
    } else {
        if (Number(t3i3) == rand) {
            arv += " " + t3i3;
            vast.style.backgroundColor = "green";
            document.getElementById("t3v").innerHTML = "Onneksi olkoon! Arvasit oikein!";
            endGame(true);
            tries = 10;
        } else {
            arv += " " + t3i3;
            vast.style.backgroundColor = "red";
            document.getElementById("t3v").innerHTML = "GAME OVER! Ajattelin lukua " + rand + ".";
            endGame(false);
        }
    }
    

    // tehdään aina
    document.getElementById("arvaukset").innerHTML = "Aikaisemmat arvauksesi:" + arv;

    document.getElementById("t3i3").value = "";

    document.getElementById("t3i3").focus();
}

function endGame(winBool) {
    if (winBool) {
        //openAlert('Pelinhoitaja tässä hei! Voitit juuri 2 elokuvalippua!!');
        openAlert('Onnittelut! pääset kotiin!!');
    } else {
        openAlert('Hävisit pelin! Parempi onni ensi kerralla!');
    }
    //alert("NYT SINUA LYKÄSTI!!! ARVASIT NUMERON OIKEIN " + (tries+1) + " ARVAUKSELLA");
    document.getElementById("uudelleen").style.display = "block";

    document.getElementById("t3i3").disabled = true;
    document.getElementById("go3").disabled = true;
}

function uudelleen() {
    document.getElementById("uudelleen").style.display = "none";

    tries = 0;
    arv = "";
    document.getElementById("t3v").style.display = "none";
    document.getElementById("arvaukset").innerHTML = "";

    document.getElementById("t3i3").disabled = false;
    document.getElementById("go3").disabled = false;
}


// alerts
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