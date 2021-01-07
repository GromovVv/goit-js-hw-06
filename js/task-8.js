import users from './users.js';
// Массив имен всех пользователей у которых есть друг
//  с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    return users.reduce((acc, currentValue) => {
        if (currentValue.friends.includes(friendName)) {
          acc.push(currentValue.name)
        }
        return acc;
      }, [])
};

console.log(getUsersWithFriend(users, 'Briana Decker')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 
// [ 'Elma Head', 'Sheree Anthony' ]


