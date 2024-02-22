// async 함수 내부에서만 사용가능

function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

async function showName() {
    const result = await getName('Mike');
    console.log(result);
}

console.log("시작");
showName();

// 시작하고 1초후 Mike가 찍힘