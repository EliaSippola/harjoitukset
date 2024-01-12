// arvojen syöttämisen funktio, loputtomasti argumentteja
// lisätään \n (\x0A) merkin "-n" tilalle

function listaaArvo() {

    // alkuteksti
    let str = "\x1B[38;5;240mparametri(t): "

    // argumanttien määrä
    let len = arguments.length;

    // tarkistetaan että arvojoukko ei ole tyhjä
    if (len == 0) {
        str += "\x1B[38;5;27mno variables\x1B[38;5;240m-> \x1B[0m";

    // tarkistetaan että kyseessä ei ole vain "-n"
    } else if (len == 1 && arguments[0] == "-n") {
        str += "\x1B[38;5;27mno variables \x1B[38;5;240m->\x0A\x1B[0m";

    // jos funktioon on palautettu ainakin yksi arvo
    } else {

        // loopataan kaikki argumentit
        for (i = 0; i < len; i++) {
            
            // jos merkki on "-n", lopetetaan suoritus ja lisätään uusi rivi
            if (arguments[i] == "-n" && i+1 == len) {
                str += " ->\x0A\x1B[0m";
                break;
            }

            // jos ei ole ensimmäinen argumentti, lisätään ", "
            if (i != 0) {
                str += ", "
            }

            // jos kyseessä on numero, väri on keltainen (\x1B[38;5;226m)
            if (typeof(arguments[i]) == "number") {
                str += `\x1B[38;5;226m${arguments[i]}\x1B[38;5;240m`;
            // jos kyseessä on teksti, väri on valkoinen (\x1B[38;5;255m)
            } else if (typeof(arguments[i]) == "string") {
                str += `\x1B[38;5;255m${arguments[i]}\x1B[38;5;240m`;
            // jos kyseessä on boolean, true = vihreä (\x1B[38;5;118m), false = punainen (\x1B[38;5;196m)
            } else if (typeof(arguments[i]) == "boolean") {
                if (arguments[i]) {
                    str += `\x1B[38;5;118m${arguments[i]}\x1B[38;5;240m`;
                } else {
                    str += `\x1B[38;5;196m${arguments[i]}\x1B[38;5;240m`;
                }
            // jos kyseessä on objekti, väri on harmaa (\x1B[38;5;250m). Lisätään myös "[" ja "]" eteen ja taakse
            } else if (typeof(arguments[i]) == "object") {
                // myös null on objekti, vaihdetaan tässä tapauksessa väriksi sininen (\x1B[38;5;33m)
                if (arguments[i] == null) {
                    str += `\x1B[38;5;33m${arguments[i]}\x1B[38;5;240m`;
                } else {
                    str += `\x1B[38;5;250m[${arguments[i]}]\x1B[38;5;240m`;
                }
            // jos kyseessä on undefined, väri on sininen (\x1B[38;5;33m)
            } else if (arguments[i] == undefined) {
                str += `\x1B[38;5;33m${arguments[i]}\x1B[38;5;240m`;
            // jos kyseessä on funktio, väri on harmaa (\x1B[38;5;250m)
            } else if (typeof(arguments[i]) == "function") {
                str += "\x1B[38;5;250m" + arguments[i] + "\x1B[38;5;240m";
            // muuten väri on valkoinen (\x1B[38;5;15m)
            } else {
                str += `\x1B[38;5;15m${arguments[i]}\x1B[38;5;240m`;
            }

            // jos kyseessä on viimeinen arvo, lisätään "->" pääte ja resetoidaan väri ja muotoilu
            if (i+1 == len) {
                str += " ->\x1B[0m";
            }

        }
    }

    // printataan parametriteksti
    process.stdout.write(str);
}


// testi(t)/esimerkki(/kit)
/*
listaaArvo("-n", "lmao");
listaaArvo("lmao", "-n");
listaaArvo(true, "-n", 9, "-n", null, "-n", "k", false);
*/

module.exports = listaaArvo;