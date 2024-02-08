const user = {
    name : "Mike",
    age : 30,
};

const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user); //{ name: 'Mike', age: 30 }
console.log(user2); //{ name: 'Tom', age: 30 }