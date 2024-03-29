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
            res("2번 주문 완료");
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

console.log("시작");
async function order() {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
}
order();

/*
시작
1번 주문 완료
2번 주문 완료
3번 주문 완료
종료
*/