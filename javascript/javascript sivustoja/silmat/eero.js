// kun hiirtä liikutetaan, tee movehandler-funktio
document.onmousemove=movehandler;

function movehandler(evt) {
    // suorita funktio anymateEye, jonka parametreina on hiiren x ja y -arvot
    animateEye(evt.clientX, evt.clientY);
}

function animateEye(xPos, yPos) {
    // aseta kuville muuttujat, joista ne voi löytää
    var rEye = document.getElementById("reye");
    var lEye = document.getElementById("leye");
    var rPup = document.getElementById("rpup");
    var lPup = document.getElementById("lpup");

    // muutetaan vasemman silmän paikkaa
    lPup.style.left = newPupPos(xPos, lEye.offsetLeft);
    lPup.style.top = newPupPos(yPos, lEye.offsetTop);

    // muutetaan oikean silmän paikkaa
    rPup.style.left = newPupPos(xPos, rEye.offsetLeft);
    rPup.style.top = newPupPos(yPos, rEye.offsetTop);

    // lasketaan silmän paikka. Pupilli ei voi liikkua silmän ulkopuolelle.
    function newPupPos(currPos, eyePos) {
        wh = window.innerHeight;

        return Math.min(Math.max(currPos, eyePos+8), eyePos+38)/wh*100 +"svh";
    }
}