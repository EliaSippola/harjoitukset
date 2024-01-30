document.getElementById("go1").addEventListener("click", teht1);

function teht1() {
    let t1name = document.getElementById("hello").value;
    document.getElementById("t1v").innerHTML = "Hei " + t1name + ", oletko valmis aloittamaan?";
}

document.getElementById("go2").addEventListener("click", teht2);

function teht2() {
    let age = document.getElementById("t2i").value;
    age >= 16 ? document.getElementById("t2v").innerHTML = "hyvä, jatketaan" : document.getElementById("t2v").innerHTML = "olet liian nuori pelaamaan tätä peliä";

    if (age >= 16) {
        document.getElementById("teht3").style.opacity = 1;
    } else {
        document.getElementById("teht3").style.opacity = 0;
    }
}

document.getElementById("go3").addEventListener("click", teht3);

let tries = 0;
let rand;

function teht3() {
    let t3i1 = document.getElementById("t3i1").value;
    let t3i2 = document.getElementById("t3i2").value;
    let t3i3 = document.getElementById("t3i3").value;

    if (tries == 0) {
        rand = Math.ceil(Math.random() * (Number(t3i1)-Number(t3i2)+1)) + Number(t3i2)-1;
    }

    if (isNaN(t3i1) || isNaN(t3i2) || isNaN(t3i3)) {
        document.getElementById("t3v").innerHTML = "Etkö edes osaa numeroita? Täytyykö minun opettaa kädestä pitäen? Numeroita ovat 1, 2, 3...";
    } else if (t3i1 < t3i2) {
        document.getElementById("t3v").innerHTML = "Ylärajan tulee olla suurempi kuin alarajan!";
    } else if (t3i3 > t3i1) {
        document.getElementById("t3v").innerHTML = "Olet aivan surkea arvaamaan! En ikinä ajattelisi noin korkeaa lukua!";
    } else if (t3i3 < t3i2) {
        document.getElementById("t3v").innerHTML = "Olet aivan surkea arvaamaan! En ikinä ajattelisi noin matalaa lukua!";
    } else if (tries < 2) {

        if (Number(t3i3) == rand) {
            document.getElementById("t3v").innerHTML = "Oikein!";
            tries = 0;
            return;
        }

        if (t3i3 < rand) {
            document.getElementById("t3v").innerHTML = "Väärin meni! Sinulla on " + (3 - Number(tries) - 1) + " yritystä jäljellä. Lukuni oli suurempi!";
        } else {
            document.getElementById("t3v").innerHTML = "Väärin meni! Sinulla on " + (3 - Number(tries) - 1) + " yritystä jäljellä. Lukuni oli pienempi!";
        }

        tries += 1;
    } else {
        Number(t3i3) == rand ? document.getElementById("t3v").innerHTML = "Oikein!" : document.getElementById("t3v").innerHTML = "Väärin meni. Ajattelin lukua: " + rand + " Yritä uudelleen!";
        tries = 0;
    }
}