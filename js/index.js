/**
 *btns:存储改变颜色按钮
 *getEles,getBg：存储需要改变颜色的元素
 *getDoc():获取元素ID函数
 *change():对需要改变颜色的元素改变颜色并存储颜色数据
 *save():写入缓存
 *load():读出缓存
 */
var btns = document.getElementsByClassName("color-btn");
var getEles = document.getElementsByClassName("hover-green"),
    i;
var getBg=document.getElementsByClassName("nav-ul");
var red, blue, pink, purple, current,curcolor;

function getDoc(id) {
    return document.getElementById(id);
}

function change(curcolor) {
    for (var i = 0; i < getBg.length; i++) {
        getBg[i].style.background = curcolor;
        continue;
    }
    for (var i = 0; i < getEles.length; i++) {
        getEles[i].style.color = curcolor;
        continue;
    }
    save(curcolor); //调用save函数存储颜色值
}

function save(data) {
    localStorage.setItem('current', data);
}

function load() {
    curcolor = localStorage.getItem('current');
    change(curcolor);
}
window.onload = load();

// 完成对按钮的事件绑定
red = getDoc("red-btn").addEventListener('click', function() { change("#FF3273") }, false);
blue = getDoc("blue-btn").addEventListener('click', function() { change("#33FAFF") }, false);
pink = getDoc("pink-btn").addEventListener('click', function() { change("#F09DF0") }, false);
purple = getDoc("purple-btn").addEventListener('click', function() { change("#A233FE") }, false);
