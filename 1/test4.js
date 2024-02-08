const user = {
    name : "Mike",
    age : 30,
};

const result = Object.keys(user);
console.log(result); //[ 'name', 'age' ]

const result2 = Object.values(user);
console.log(result2); //[ 'Mike', 30 ]

const result3 = Object.entries(user);
console.log(result3); //[ [ 'name', 'Mike' ], [ 'age', 30 ] ]
