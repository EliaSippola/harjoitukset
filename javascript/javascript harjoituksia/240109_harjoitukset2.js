// tehtävien väliset viestit
function logteht(str) {
    console.log('\x1b[38;5;113m%s\x1B[0m', `\n----- ${str} -----\n`);
    return;
}

// tehtävän arvot
function arvot(str1, str2 = null, str3 = null, str4 = null) {
    if (str2 == null) {
        process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1} \x1B[38;5;241m-> \x1B[0m`);
    } else if (str3 == null) {
        if (str2 == "-n") {
            process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1} \x1B[38;5;241m-> \x1B[0m\x0A`);
            return;
        }
        process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1}\x1B[38;5;241m, \x1B[38;5;226m${str2} \x1B[38;5;241m-> \x1B[0m`);
    } else if (str4 == null) {
        if (str3 == "-n") {
            process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1}\x1B[38;5;241m, \x1B[38;5;226m${str2} \x1B[38;5;241m-> \x1B[0m\x0A`);
            return;
        }
        process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1}\x1B[38;5;241m, \x1B[38;5;226m${str2}\x1B[38;5;241m, \x1B[38;5;226m${str3} \x1B[38;5;241m-> \x1B[0m`);
    } else {
        if (str4 == "-n") {
            process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1}\x1B[38;5;241m, \x1B[38;5;226m${str2}\x1B[38;5;241m, \x1B[38;5;226m${str3} \x1B[38;5;241m-> \x1B[0m\x0A`);
            return;
        }
        process.stdout.write(`\x1B[38;5;241mparametri(t): \x1B[38;5;226m${str1}\x1B[38;5;241m, \x1B[38;5;226m${str2}\x1B[38;5;241m, \x1B[38;5;226m${str3}\x1B[38;5;241m, \x1B[38;5;226m${str4} \x1B[38;5;241m-> \x1B[0m`);
    }
}


// teht 1, operaatiot ja muuttujat
logteht("teht 1");

// luvut
luku1 = 17;
luku2 = 3;

// arvot
summa = luku1 + luku2;
erotus = luku1 - luku2;
tulo = luku1 * luku2;
osamaara1 = luku1 / luku2;
jaannos = luku1 % luku2;

// tulostetaan arvot
console.log(`Luvut ovat ${luku1} ja ${luku2}`);
console.log(`Summa on ${summa}`);
console.log(`Erotus on ${erotus}`);
console.log(`Tulo on ${tulo}`);
console.log(`Osamäärä on ${osamaara1}`);
console.log(`Janojäännös on ${jaannos}`);


// teht 2, funktio edellisestä
logteht("teht 2");

function operaatiot(luku1, luku2) {
    arvot(luku1, luku2, "-n");

    summa = luku1 + luku2;
    erotus = luku1 - luku2;
    tulo = luku1 * luku2;
    osamaara1 = luku1 / luku2;
    jaannos = luku1 % luku2;

    console.log(`Luvut ovat ${luku1} ja ${luku2}`);
    console.log(`Summa on ${summa}`);
    console.log(`Erotus on ${erotus}`);
    console.log(`Tulo on ${tulo}`);
    console.log(`Osamäärä on ${osamaara1}`);
    console.log(`Janojäännös on ${jaannos}`);
}

// testi(t)
operaatiot(17, 3);
operaatiot(1, 1);


// teht 3, parittomat toisto
logteht("teht 3");

for (i = 0; i < 5; i++) {
    console.log(9-i*2);
}


// teht 4, ympyrä
logteht("teht 4");

function ympyra(d) {
    arvot(d, "-n");

    console.log(`Halkaisija ${d}`);
    console.log(`Säde: ${d/2}`);
    console.log(`Piiri: ${d*Math.PI}`);
    console.log(`Pinta-ala: ${Math.PI*((d/2)**2)}`);
}

// testi(t)
ympyra(2);
ympyra(4);
ympyra(1);


// teht 5, tilikauden tulos
logteht("teht 5");

function tilitulos(t, k) {
    arvot(t, k);

    if (t-k == 0) {
        return `\x1B[38;5;240mnollakausi\x1B[0m`;
    } else if (t-k > 0) {
        return `\x1B[38;5;46mvoittoa\x1B[0m`;
    }
    return `\x1B[38;5;196mtappiota\x1B[0m`;
}

console.log(tilitulos(10, 10));
console.log(tilitulos(9, 10));
console.log(tilitulos(11, 10));


// teht 6, nelilaskin
logteht("teht 6");

function laskin(int1, int2, operator) {
    arvot(int1, int2, operator);

    switch(operator) {
        case "+":
            res = int1+int2;
            break;
        case "-":
            res = int1-int2;
            break;
        case "*":
            res = int1*int2;
            break;
        case "/":
            if (int2 == 0) {
                res = "\x1B[38;5;196mJako nollalla!\x1B[0m";
                break;
            }
            res = int1/int2;
            break;
        default:
            res = `\x1B[38;5;196mOdottamaton operaattori "${operator}"\x1B[0m`;
    }

    console.log(`${int1} ${operator} ${int2} = ${res}`);
}

// testi(t)
laskin(2, 2, "+");
laskin(2, 2, "-");
laskin(2, 2, "*");
laskin(2, 2, "/");
laskin(2, 0, "/");
laskin(2, 2, "=");


// teht 7, suurempi luku
logteht("teht 7");

function suurempi(int1, int2) {
    arvot(int1, int2)

    res = Math.sign(int1-int2);

    switch (res) {
        case 0:
            res = `luku ${int1} on yhtä suuri kuin luku ${int2}`;
            break;
        case 1:
            res = `Annetuista luvuista ${int1} ja ${int2}, suurempi on ${int1}`;
            break;
        case -1:
            res = `Annetuista luvuista ${int1} ja ${int2}, suurempi on ${int2}`;
            break;
        default:
            res = `\x1B[38;5;196mOdottamaton virhe toteutuksessa!`;
    }

    return res;

}

// testi(t)
console.log(suurempi(6, 7));
console.log(suurempi(7, 7));
console.log(suurempi(8, 7));


// teht 8, tuumat -> sentit
logteht("teht 8");

function muunna(tuumat) {
    return tuumat * 2.54;
}

function tulostaPituus(x, y) {
    arvot(x, y);

    console.log(`${x} tuumaa on ${y} senttimetriä`);
}

// testi(t)
tulostaPituus(2, muunna(2));
tulostaPituus(3, muunna(3));


// teht 9, välissä
logteht("teht 9");

function valissa(int) {
    arvot(int);

    switch (int) {
        case 1:
            res = true;
            break;
        case 2:
            res = true;
            break;
        case 3:
            res = true;
            break;
        case 4:
            res = true;
            break;
        case 5:
            res = true;
            break;
        case 6:
            res = true;
            break;
        case 7:
            res = true;
            break;
        case 8:
            res = true;
            break;
        case 9:
            res = true;
            break;
        default:
            res = false;
    }

    return res;
}

// testi(t)
console.log(valissa(20));
console.log(valissa(-10));
console.log(valissa(5));
console.log(valissa(0));


// teht 10, valuuttalaskin
logteht("teht 10");

function valuutta(kurssi, maara) {
    arvot(kurssi, maara);

    if (maara-2.5 <= 0) {
        return `\x1B[38;5;196mVarat eivät riitä, palvelumaksu on 2.50 EUR!\x1B[0m`;
    }

    return `1 EUR = ${kurssi} USD, palvelumaksu 2.50 EUR, nostettu ${Math.round((maara-2.5)*kurssi*100)/100} USD`;
}

// testi(t)
console.log(valuutta(1.09, 1));
console.log(valuutta(1.09, 20));


// teht 11, fahrenheit
logteht("teht 11");

function fahrenheit(c) {
    return c*1.8+32;
}

function tulostaLampo(c) {
    arvot(c);

    f = fahrenheit(c);

    console.log(`${c}°C -> ${f}°F`);
    return;
}

// testi(t)
tulostaLampo(-30);
tulostaLampo(0);
tulostaLampo(30);


// teht 12, suurin kolmesta
logteht("teht 12");

function suurinKolmesta(int1, int2, int3) {
    arvot(int1, int2, int3);

    array = [int1, int2, int3];
    res = array[0];

    for (i = 0; i < arguments.length-1; i++) {
        if (array[i + 1] > array[i]) {
            res = array[i+1];
        }
    }

    console.log(`Luvut = ${int1}, ${int2} ja ${int3}. Suurin = ${res}`);
}

// testi(t)
suurinKolmesta(1, 2, 3);
suurinKolmesta(2, 3, 1);
suurinKolmesta(3, 2, 1);


// teht 12, suuruusjärjestys
logteht("teht 13");

function suuruusjärjestys(int1, int2, int3) {
    arvot(int1, int2, int3);

    array = [int1, int2, int3];
    resArray = array.toSorted(function(a, b){return b - a});

    console.log(`Alkuperäinen järjestys = ${array[0]}, ${array[1]} ja ${array[2]}. Suuruusjärjestys = ${resArray[0]}, ${resArray[1]} ja ${resArray[2]}`)
}

// testit
suuruusjärjestys(1, 2, 3);
suuruusjärjestys(2, 3, 1);
suuruusjärjestys(3, 1, 2);
suuruusjärjestys(-3, -1, -2);