let btns = document.getElementsByTagName('button');
let input = document.querySelector("input");
let len = btns.length;
let cz, a, b, s;
for (let i = 0; i < len; i++) {
    btns[i].addEventListener(
        'click', () => {
            // btns[i].innerHTML = "bian";
            let v1 = input.value;
            let v2 = btns[i].innerHTML;
            if (v2 >= 0 && v2 <= 9) {
                input.value += v2;
            }
            // alert(typeof (v2));
            if (v1 !== "") {
                switch (v2) {
                    case "+":
                        a = v1;
                        cz = "+";
                        input.value = '';
                        break;
                    case "-":
                        a = v1;
                        cz = "-";
                        input.value = '';
                        break;
                    case "*":
                        a = v1;
                        cz = "*";
                        input.value = '';
                        break;
                    case "/":
                        a = v1;
                        cz = "/";
                        input.value = '';
                        break;
                    case "AC":
                        let temp = v1.substring(0, v1.length - 1);
                        v1 = temp;
                        input.value = temp;
                        break;
                    case "clear":
                        v1 = "";
                        input.value = '';
                        break;
                    case "=":
                        if (a != undefined) {
                            b = v1;
                            //*不懂为什么这样操作只进行+操作，其他操作无效 */
                            // switch (cz) {
                            //     case "+":
                            //         s = parseFloat(a) + parseFloat(b);
                            //     case "-":
                            //         s = parseFloat(a) - parseFloat(b);
                            //     case "*":                               
                            //         s = parseFloat(a) * parseFloat(b);
                            //     case "/":
                            //         s = parseFloat(a) + parseFloat(b);
                            // }
                            // input.value = s;
                            if (cz === "+") {
                                s = parseFloat(a) + parseFloat(b);
                            }
                            if (cz === "-") {
                                s = parseFloat(a) - parseFloat(b);
                            }
                            if (cz === "*") {
                                s = parseFloat(a) * parseFloat(b);
                            }
                            if (cz === "/") {
                                s = parseFloat(a) / parseFloat(b);
                            }
                            input.value = s;
                        }

                }
            }
            // alert(typeof (a));
        }
    )
}
// window.onload = load;

