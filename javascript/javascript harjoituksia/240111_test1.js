const listaa = require('./listaaArvo');

function test(a, b) {
    listaa(a, b, "-n");
    console.log(a);
    console.log(b);
}

test("a", "b");