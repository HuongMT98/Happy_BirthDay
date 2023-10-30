var p_name = 'Bé Tiên';
var p_age = '16';
if (p_name == 1 || p_name === "" || p_name === " " || p_name === undefined) {
    p_name = "Name";
}
if (p_age == "" || p_age === undefined) {
    p_age = "21";
}
document.body.onload = set();

function center(elm) {
    marginL = (window.innerWidth - elm.clientWidth) / 2 + "px";
    return marginL
}

function set() {
    var id_cake = document.getElementById("cake");
    id_cake.style.marginLeft = center(id_cake);
    var id_hp_b = document.getElementById("hp_b");
    id_hp_b.style.marginLeft = center(id_hp_b);
    var id_cake_s = document.getElementById("cake_s");
    var id_cake_p = document.getElementById("cake_p");
    id_cake_s.innerHTML = window.p_name;
    id_cake_p.innerHTML = window.p_age;
}
setInterval(function () {
    if (window.windowH === window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) {
        set();
        window.windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    if (window.windowW === window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) {
        set();
        window.windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
}, 1);