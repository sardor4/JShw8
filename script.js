let obj = document.querySelector('.obj');
let objRes = document.querySelector('.obj__res');
function additionNum(a, b, c, d, e, f, g, j, k, l) {
    return {
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        j,
        k,
        l,
    }
}
let x = additionNum(12, 23, "samurai", true, "odd", 51, "ninja", "func", 9, "uwu");
for (const key in x) {
    obj.innerHTML +=  x[key] + ', ';
}
function add(x) {
    for (const key in x) {
        if (!isNaN(x[key])) {
            objRes.innerHTML += x[key] * 2 + ", ";
        }
    }
}
add(x);