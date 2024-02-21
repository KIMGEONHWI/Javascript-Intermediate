const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};

bmw.__proto__ = car;

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;

console.log(x5.name);
console.log(x5.color);
console.log(x5.navigation);