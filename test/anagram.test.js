const isAnagram = require('../app/js/anagram');

test('Função isAnagram deve existir', () => {
    expect(typeof isAnagram).toEqual('function');
    expect(isAnagram).toBeDefined();
});

test('"cinema" deve ser um anagrama de "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" deve ser um anagrama de "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" não deve ser um anagrama de "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});