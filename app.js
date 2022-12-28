let min = document.getElementById('minutos');
let seg = document.getElementById('segundos');
let cen = document.getElementById('centesimas');
let c = 0;
let m = 0;
let s = 0;

function crono() {
    control = setInterval(start, 10);
}

function start() {
    if (c < 99) {
        c++;
        cen.innerHTML = c;
    }
    if (c == 99) {
        c = -1;
    }
    if (c == 0) {
        s++;
        seg.innerHTML = s;
    }
    if (s == 59) {
        s = -1;
    }
    if ((s == 0)&&(c == 0))  {
        m++;
        min.innerHTML = m;
    }
    if (m == 59) {
        m = -1;
    }
}

function stop() {
    clearInterval(control);
}

function reset() {
    clearInterval(control);
    let c = 0;
    let m = 0;
    let s = 0;
    min.innerHTML = '00';
    cen.innerHTML = '00';
    seg.innerHTML = '00';
}
