const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(()=> {
            rej("xxx");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message)
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res("3번 주문 완료");
        }, 2000);
    });
};

//프로미스 체이닝 (Promises chaining)
console.log("시작");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log("끝");
    });

/*
시작
1번 주문 완료
xxx
끝
*/