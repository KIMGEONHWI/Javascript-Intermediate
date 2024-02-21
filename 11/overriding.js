// 오버라이딩(method overriding)

class Car {
    constructor(color) {
        this.color = color;
        this.wheel = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}

const z4 = new Bmw("blue");

console.log(z4);