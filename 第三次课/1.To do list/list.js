let add = document.getElementsByClassName('r')[0];
let list = document.querySelector('ul');
add.addEventListener('click', () => {
    // alert("add");
    let thing = document.getElementById('thing').value;
    // alert(thing)
    let li = document.createElement('div');
    let t = document.createTextNode(thing)
    let x1 = document.createElement("div");
    let x = document.createTextNode("×");
    li.className = "list";
    x1.className = "close";
    if (thing == "") {
        alert("请输入list");
    } else {
        list.appendChild(li);
        li.appendChild(t);
        li.appendChild(x1);
        x1.appendChild(x);
    }
})


// 点击整个list划貂它
//**为什么删除上一个，下面一个也要被完成 */
let wc = () => {
    let m = document.getElementsByClassName('list');
    let n = m.length;
    for (let i = 0; i < n; i++) {
        m[i].onclick = () => {
            m[i].style.fontStyle = "italic";
            m[i].style.color = "white";
            m[i].style.textDecorationLine = "line-through";
        }
    }
}
setInterval(wc, 1);


//点击X关闭当前list
let sc = () => {
    let l = document.getElementsByClassName("close");
    let len = l.length;
    for (let i = 0; i < len; i++) {
        let l = document.getElementsByClassName("close");
        let pp = document.getElementsByClassName("list");
        l[i].onclick = () => {
            pp[i].remove();
        }
        // pp[i].onclick = () => {
        //     pp[i].className = "wczt";
        // }
    }
}
setInterval(sc, 1);











