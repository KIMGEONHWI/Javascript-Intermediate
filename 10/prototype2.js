const Bmw = function (color) {
    this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("drive..");
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
    console.log("STOP!");
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x5.stop()); //STOP!
                        //undefined
console.log(z4.constructor === Bmw); // true
