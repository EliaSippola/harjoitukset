document.getElementById("go3").addEventListener("click", teht3);

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

    if (tries == 0) {
        rand = Math.ceil(Math.random() * (Number(t3i1)-Number(t3i2)+1)) + Number(t3i2)-1;
        console.log(rand);
    }

    if (isNaN(t3i3)) {
        vast.style.color = "red";
        document.getElementById("t3v").innerHTML = "Etkö edes osaa numeroita? Täytyykö minun opettaa kädestä pitäen? Numeroita ovat 1, 2, 3...";
    } else if (Number(t3i3) > Number(t3i1)) {
        vast.style.color = "red";
        document.getElementById("t3v").innerHTML = "Olet aivan surkea arvaamaan! En ikinä ajattelisi noin korkeaa lukua!";
    } else if (Number(t3i3) < Number(t3i2)) {
        vast.style.color = "red";
        document.getElementById("t3v").innerHTML = "Olet aivan surkea arvaamaan! En ikinä ajattelisi noin matalaa lukua!";
    } else if (tries < 4) {

        if (Number(t3i3) == rand) {
            vast.style.color = "green";
            document.getElementById("t3v").innerHTML = "Oikein!";
            popup();
            tries = 10;
            return;
        }

        if (t3i3 < rand) {
            vast.style.color = "red";
            document.getElementById("t3v").innerHTML = "Väärin meni! Sinulla on " + (5 - Number(tries) - 1) + " yritystä jäljellä. Lukuni oli suurempi!";
        } else {
            vast.style.color = "red";
            document.getElementById("t3v").innerHTML = "Väärin meni! Sinulla on " + (5 - Number(tries) - 1) + " yritystä jäljellä. Lukuni oli pienempi!";
        }

        tries += 1;
    } else {
        if (Number(t3i3) == rand) {
            vast.style.color = "green";
            document.getElementById("t3v").innerHTML = "Oikein!"
            popup();
            tries = 10;
        } else {
            vast.style.color = "red";
            document.getElementById("t3v").innerHTML = "Väärin meni. Ajattelin lukua: " + rand;
    
        }
    }
}

function popup() {
    alert("Oikein!!\n\nVoitit auton!");
}