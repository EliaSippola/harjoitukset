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


// teht 1, merkkijononojen yhdistäminen
logteht("tehävä 1");
function mitaKuuluu(nimi) {
    return `Hei ${nimi}, mitä kuuluu?`;
}

// testi
arvot("<laita nimi tähän>");
console.log(mitaKuuluu("<laita nimi tähän>"));


// teht 2, korota neliöön
logteht("tehävä 2");
function nelio(int) {
    return int ** 2;
}

// testi
arvot(2);
console.log(nelio(2));

// teht 3, onko täysi-ikäinen
logteht("tehävä 3");
function aikuinen(ika) {
    if (ika >= 18) {
        return "täysi-ikäinen";
    }

    return "alaikäinen";
}

// testi
arvot(17);
console.log(aikuinen(17));
arvot(18);
console.log(aikuinen(18));


// teht 4, suurempi luku
logteht("tehävä 4");
function suurempi(int1, int2) {
    if (int1 == int2) {
        return `luku ${int1} on yhtä suuri kuin luku ${int2}`;
    } else if (int1 > int2) {
        return `Annetuista luvuista ${int1} ja ${int2}, suurempi on ${int1}`;
    }
    return `Annetuista luvuista ${int1} ja ${int2}, suurempi on ${int2}`;
}

// testi
arvot(6, 7);
console.log(suurempi(6, 7));

// teht 5, kolmion pinta-ala
logteht("tehävä 5");

function pintaala(kanta, korkeus) {
    return Math.round(kanta*korkeus*5)/10;
}

// testi
arvot(3, 3);
console.log(pintaala(3, 3));
arvot(2, 2);
console.log(pintaala(2, 2));
arvot(3, 7.5);
console.log(pintaala(3, 7.5));