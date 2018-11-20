const chunkArray = require('../app/js/chunk');

test('Deve existir a função chunkArray', () => {
    expect(chunkArray).toBeDefined();
});

test('Deve fazer que o array fique com arrays de 2 numeros dentro', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunkArray(numeros, len)

    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Deve fazer que o array fique com arrays de 1 numeros dentro', () => {
    const numeros = [1, 2, 3];
    const len = 1;
    const chunkedArr = chunkArray(numeros, len)

    expect(chunkedArr).toEqual([[1], [2], [3]]);
});