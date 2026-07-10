const canvas = document.createElement("canvas");
canvas.id = "aurora-canvas";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

let time = 0;

const colors = [
    "0,255,180",
    "0,180,255",
    "140,90,255"
];

function blob(x, y, radius, color) {
    const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
    );

    gradient.addColorStop(0, `rgba(${color},0.25)`);
    gradient.addColorStop(0.5, `rgba(${color},0.12)`);
    gradient.addColorStop(1, `rgba(${color},0)`);

    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {

    time += 0.003;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#050816";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    blob(
        canvas.width*0.2 + Math.sin(time)*180,
        canvas.height*0.3 + Math.cos(time*1.2)*120,
        420,
        colors[0]
    );

    blob(
        canvas.width*0.7 + Math.cos(time*0.8)*220,
        canvas.height*0.4 + Math.sin(time)*170,
        500,
        colors[1]
    );

    blob(
        canvas.width*0.45 + Math.sin(time*1.5)*160,
        canvas.height*0.75 + Math.cos(time)*120,
        460,
        colors[2]
    );

    requestAnimationFrame(animate);
}

animate();