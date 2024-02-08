let n ="name";
let a ="age";

const user = {
    [n] : "Mike",
    [a] : 30,
    [1+4] : 5, //계산식도 가능
}

console.log(user); //{ '5': 5, name: 'Mike', age: 30 }