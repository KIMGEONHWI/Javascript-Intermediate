let userlist = [
    { name: "Mike", age : 30 },
    { name: "Tom", age : 10 },
    { name: "Jane", age : 27 },
    { name: "Sue", age : 26 },
    { name: "Harry", age : 42 },
    { name: "Steve", age : 60 },
];

let result = userlist.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []); // []는 초기값(빈배열)

console.log(result);