const {fromDollarToYen, fromYenToPound, fromEuroToDollar} = require('./app')


test('3 Euros son 3.745 dolares', function(){
    const result = fromEuroToDollar(3.5)
    expect(result).toBe(3.745);
});

test('4 dolares son 585.0', function(){
    const result = fromDollarToYen(4)
    expect(result).toBe(585.0467289719626);
});

test('1 Yen son 0.027 libras', function(){
    const result = fromYenToPound(547.75)
    expect(result).toBe(3.045);
});
























