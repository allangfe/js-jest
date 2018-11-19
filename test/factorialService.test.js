const factorialService = require('../app/js/factorialService');
    
test('Deve calcular a fatorial dando um numero', function(){
    expect(factorialService.calculate(1)).toBe(1);
    expect(factorialService.calculate(2)).toBe(2);
    expect(factorialService.calculate(3)).toBe(6);
    expect(factorialService.calculate(4)).toBe(24);
    expect(factorialService.calculate(5)).toBe(120);
});

test('Deve retornar 1 se o numero calculado for 0', function(){
    expect(factorialService.calculate(0)).toBe(1);
});

test('Deve retornar null se um parametro dado for invalido', function(){
    expect(factorialService.calculate(-1)).toBeNull();
    expect(factorialService.calculate("teste")).toBeNull();
    expect(factorialService.calculate("")).toBeNull();
    expect(factorialService.calculate()).toBeNull();
});