const reverseString = require('../app/js/reverseString')

test('Deve existir a função reverseString', () => {
    expect(reverseString).toBeDefined();
});

test('Deve inverter strings', () => {
    expect(reverseString('hello')).toEqual('olleh');
});