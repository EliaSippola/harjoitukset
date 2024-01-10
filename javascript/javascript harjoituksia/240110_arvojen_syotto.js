// arvojen syöttämisen funktio, loputtomasti argumentteja
function listaaArvot() {

    str = "\x1B[38;5;240mparametri(t): "

    if (arguments.length == 0) {
        str += "\x1B[38;5;27mnull \x1B[38;5;240m-> \x1B[0m";
    } else if (arguments.length == 1 && arguments[0] == "-n") {
        str += "\x1B[38;5;27mnull \x1B[38;5;240m->\x0A\x1B[0m";
    } else {
        for (i = 0; i < arguments.length; i++) {

            if (i+1 == arguments.lenght) {
                if (arguments[i+1] == "-n") {
                    str += " ->\x0A\x1B[0m";
                }
            } else {
                if (i != 0) {
                    str += ", "
                }

                if (typeof(arguments[i]) == NaN) {
                    str += `\x1B[38;5;226m${arguments[i]}\x1B[38;5;240m`;
                } else if (typeof(arguments[i]) == String) {
                    str += `\x1B[38;5;50m${arguments[i]}\x1B[38;5;240m`;
                } else {
                    str += `\x1B[38;5;15m${arguments[i]}\x1B[38;5;240m`;
                }
            }

        }
    }

    console.log(arguments.length);
    console.log(str);
}

listaaArvot("buth", "-n");
listaaArvot(2, 5, 11, "-n");
listaaArvot(2, 2, 2, 2);
