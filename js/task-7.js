import users from './users.js';
// Получить общую сумму баланса (поле balance) 
// всех пользователей.

const calculateTotalBalance = users => {
    return users.reduce((totalbalance, user) => totalbalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916