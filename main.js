const canvas = document.getElementById('canvas');
const button = document.createElement('button');
const btn = document.querySelectorAll(".btn");

canvas.height = 720;
canvas.width = 1280;
canvas.style.marginTop = "75px";

const ctx = canvas.getContext('2d');
button.innerText = 'Clear';

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

document.body.appendChild(button);
button.style.background = '#115599';
button.style.color = '#fff';
button.style.fontSize = 'xx-large';
button.style.display = 'block';
button.style.textAlign = 'center';
button.style.cursor = 'pointer';
button.style.marginLeft = "950px";
button.style.marginTop = "0px";

let painting = false;

function start(e) {
    painting = true;
    draw(e)
}

function end() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - 315, e.clientY - 75);
    ctx.stroke();
    ctx.moveTo(e.clientX - 315, e.clientY - 75);
}

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", end);
canvas.addEventListener("mousemove", draw)

button.addEventListener('click', () => {
    ctx.fillRect(0, 0, 1280, 720);
});

function red() {
    ctx.strokeStyle = 'red';
};

function black() {
    ctx.strokeStyle = 'black';
};

function green() {
    ctx.strokeStyle = 'green';
};

function blue() {
    ctx.strokeStyle = 'blue';
};

function purple() {
    ctx.strokeStyle = 'purple';
}

function erase() {
    ctx.lineWidth = 30;
    ctx.strokeStyle = "white";
}

black();
