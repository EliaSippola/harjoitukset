function adult(year) {
    if (typeof year !== 'number') {
        throw new Error("Parameter was not a number!")
    }
    return year > 17;
}

module.exports = adult;