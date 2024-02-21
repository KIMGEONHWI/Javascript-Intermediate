const pr = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //resolve("ok");
        reject(new Error("err...."));
    }, 1000);
});

console.log("시작");
pr.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("끝");
    });

/*
시작
Error: err....
    at Timeout._onTimeout (c:\Users\dirnr\Desktop\Javascript_intermediate\12\promise2.js:4:16)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
끝
*/