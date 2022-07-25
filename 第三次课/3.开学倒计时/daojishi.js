let dao = () => {
    let nowTime = + new Date();
    let goSchoolTime = + new Date("2022/9/3  00:00:00");
    let times = (goSchoolTime - nowTime) / 1000;
    let s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    let m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let d = parseInt(times / 60 / 60 / 24);
    let sj = document.getElementById("sj");
    sj.innerHTML = d + '天' + h + '时' + m + '分' + s + '秒'; m
}
dao()
setInterval(dao, 1000)

