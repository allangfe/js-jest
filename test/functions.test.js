const functions = require('../app/js/functions');

// beforeEach(() => initDataBase()); //Inicializa antes de cada teste
// afterEach(() => closeDataBase()); //Inicializa após cada teste

// beforeAll(() => initDataBase()); //Inicializa antes de todos os testes
// afterAll(() => closeDataBase()); //Inicializa depois de todos os testes

// const initDataBase = () => console.log('Database Initialized...');
// const closeDataBase = () => console.log('Database Closed...');

const checkNome = () => console.log('Checando nomes...')

describe('Checando nomes', () => {
    beforeEach(() => checkNome());

    test('Usuário é Allan', () => {
        const usuario = 'Allan';
        expect(usuario).toBe('Allan');
    });

    test('Usuário é Teste', () => {
        const usuario = 'Teste';
        expect(usuario).toBe('Teste');
    });
}); // beforeEach roda apenas nos testes que está no bloco discribe

test('Deve somar dois numeros', () => {
    expect(functions.add(1, 2)).toBe(3);
});

test('Soma  2 + 2 não é 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
}); 

test('Deve ser null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Deve ser false', () => {
    expect(functions.isFalse(undefined)).toBeFalsy();
}); 

test('Deve ser Allan Gonçalves o retorno do objeto', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Allan',
        lastName: 'Gonçalves'
    });
});

test('Deve ser menor ou igual que 1600', () => {
    const load1 = 800;
    const load2 = 800;

    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test('Não deve ter I na palavra team', () => {
    expect('team').not.toMatch(/I/i);
});

//arrays
test('Admin deve estar em usernames', () => {
    var usernames = ['Luffy', 'Goku', 'admin'];
    expect(usernames).toContain('admin');
}); 

//Trabalhando com dados async

//promise
// test('Usuario obtido deve ser Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(d => {
//         expect(d.name).toEqual('Leanne Graham');
//     });
// });

//Async await
test('Usuario obtido deve ser Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});