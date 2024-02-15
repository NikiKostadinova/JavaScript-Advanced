const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
];

// 1. write code to get the names from the given array of users

// const names = users.map((user) => user.name);

// or with forEach
// const names = [];
// users.forEach((user) => {
//     names.push(user.name);
// });


// 2. get only the active users

// const names = users.filter((user) => user.isActive).map((user) => user.name);

// 3. sort users bey age descending

const names = users
.sort((user1, user2) => (user1.age < user2.age ? 1: -1))
.filter((user) => user.isActive)
.map((user) => user.name);


console.log(names)