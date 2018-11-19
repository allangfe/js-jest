const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    isFalse: x => x,
    createUser: () => {
        const user = { firstName: 'Allan' };
        user['lastName'] = 'Gonçalves';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}

module.exports = functions;