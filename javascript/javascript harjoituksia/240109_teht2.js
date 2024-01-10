// tehtävien väliset viestit
function logteht(str) {
    console.log('\x1b[38;5;113m%s\x1B[0m', `\n----- ${str} -----\n`);
    return;
}

// tehtävän arvot
function arvot(str1, str2 = null) {
    if (str2 == null) {
        process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1} \x1B[38;5;241m-> \x1B[0m`);
    } else {
        process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1}\x1B[38;5;241m, \x1B[38;5;226m${str2} \x1B[38;5;241m-> \x1B[0m`);
    }
}

// teht 1, osamäärä
logteht("teht 1");

function osamaara(int1, int2) {
    arvot(int1, int2);

    if (int2 == 0) {
        return "\x1B[38;5;196mVirhe, jakajana 0!\x1B[0m";
    }
    return int1 / int2;
}

// testi(t)
console.log(osamaara(1, 0));
console.log(osamaara(2, 2));


// teht 2, värianalyysi
logteht("teht 2");

function varianalyysi(vari) {
    arvot(vari);

    if (vari >= 380 && 450 > vari) {
        return "\x1B[38;5;91mVioletti\x1B[0m";
    } else if (vari >= 450 && 490 > vari) {
        return "\x1B[38;5;21mSininen\x1B[0m";
    } else if (vari >= 490 && 560 > vari) {
        return "\x1B[38;5;46mVihreä\x1B[0m";
    } else if (vari >= 560 && 590 > vari) {
        return "\x1B[38;5;226mKeltainen\x1B[0m";
    } else if (vari >= 590 && 630 > vari) {
        return "\x1B[38;5;208mOranssi\x1B[0m";
    } else if (vari >= 630 && 760 > vari) {
        return "\x1B[38;5;196mPunainen\x1B[0m";
    } else {
        return null;
    }
}

// testi(t)
console.log(varianalyysi(400));
console.log(varianalyysi(460));
console.log(varianalyysi(500));
console.log(varianalyysi(580));
console.log(varianalyysi(600));
console.log(varianalyysi(700));
console.log(varianalyysi(1000));


// teht 3, taksimatkan hinta
logteht("teht 3");

function hinta(henkilot, km) {
    arvot(henkilot, km);

    if (henkilot == 1 || henkilot == 2) {
        return 5,4 + km*1,6;
    } else if (henkilot == 3 || henkilot == 4) {
        return 5,4 + km*1,9;
    } else if (henkilot == 5 || henkilot == 6) {
        return 5,4 + km*2;
    } else if (henkilot > 6) {
        return 5,4 + km*2,2;
    } else {
        return "\x1B[38;5;196mHenkilöitä täytyy olla vähintään 1!\x1B[0m";
    }
}

// testi(t)
console.log(hinta(1, 10));
console.log(hinta(4, 10));
console.log(hinta(5, 10));
console.log(hinta(10, 10));
console.log(hinta(-1, 10));


// teht 4, pyöristäminen
logteht("teht 4");

function pyorista(int) {
    arvot(int);

    if (int >= 0) {
        return Math.floor(int + 0.5);
    } else {
        return Math.ceil(int - 0.5);
    }
}

// testi(t)
console.log(pyorista(5.34));
console.log(pyorista(-5.34));


// teht 5, tuotteen hinta
logteht("teht 5");

function kokonaishinta(hinta, alv) {
    arvot(hinta, alv);

    if (hinta >= 100 && hinta < 200) {
        return hinta*0.95*(1+alv/100);
    } else if (hinta >= 200 && hinta < 500) {
        return hinta*0.90*(1+alv/100);
    } else if (hinta >= 500) {
        return hinta*0.85*(1+alv/100);
    } else {
        return hinta*(1+alv/100);
    }
}

// testi(t)
console.log(kokonaishinta(10, 24));
console.log(kokonaishinta(150, 24));
console.log(kokonaishinta(350, 24));
console.log(kokonaishinta(1000, 24));
console.log(kokonaishinta(1000, 19));