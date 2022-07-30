//按钮节流操作：
//用户只有在点击之后等待1000ms后执行操作
let btn = document.querySelector("#btn");
let timer = null;
btn.addEventListener('click', () => {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(() => {
        console.log("棒棒棒！");
    }, 1000)

})
window.onload = () => {
    const resEle = document.querySelector("#res");
    function changeOutputVal(value) {
        resEle.value += `\n${value}`;
    }
    function debounce(fn) {
        let timer = null;
        return (...args) => {
            console.log(args);
            //节流操作
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, 1000);
        }
    }
    const outputRes = debounce(changeOutputVal);
    const inputEle = document.querySelector("#name");
    inputEle.addEventListener("input", (eve) => {
        outputRes(eve.target.value);
    });
}
