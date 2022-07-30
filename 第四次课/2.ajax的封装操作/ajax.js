sendAJAX = (url) => {
    return new Promise((resolve, reject) => {
        const x = new XMLHttpRequest();
        x.open('GET', url);
        x.send();
        x.onreadystatechange = function () {
            if (x.readyState === 4) {
                if (x.status >= 200 && x.status < 300) {
                    resolve(x.response);
                } else {
                    reject(x.status);
                }
            }
        }
    })
}

async function demo() {
    let result = await sendAJAX("https://blog.csdn.net/qq_19652407/article/details/109627594");//跨域问题
    console.log(result);
}
demo();
