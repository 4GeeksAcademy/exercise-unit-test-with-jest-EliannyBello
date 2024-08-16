
let oneEurols = {
    'JPY': 156.5,
    'USD': 1.07,
    'GBP': 0.87,
};

const fromDollarToYen = (valueInUSD) => {
    let valueInEuro = valueInUSD / oneEurols.USD
    return valueInEuro * oneEurols.JPY

}

const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEurols.USD
}

const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEurols.JPY
    return valueInEuro * oneEurols.GBP
}


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

