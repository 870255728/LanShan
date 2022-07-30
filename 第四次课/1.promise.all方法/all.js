let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
})

let p2 = Promise.resolve('Success');
let p3 = Promise.resolve('Oh Yeah');
//调用
const result = Promise.all([p1, p2, p3]);

setTimeout(function () {
    console.log(result)
    /*
    Promise {<fulfilled>: Array(3)}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Array(3)
    0: "OK"
    1: "Success"
    2: "Oh Yeah"
    length: 3
    [[Prototype]]: Array(0)
    */
}, 2000)