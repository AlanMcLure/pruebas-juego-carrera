const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let car = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    width: 50,
    height: 100,
    speed: 5,
    dx: 0,
    dy: 0
};

function drawCar() {
    ctx.fillStyle = 'red';
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
    car.x += car.dx;
    car.y += car.dy;

    // Bordes del canvas
    if (car.x < 0) car.x = 0;
    if (car.x + car.width > canvas.width) car.x = canvas.width - car.width;
    if (car.y < 0) car.y = 0;
    if (car.y + car.height > canvas.height) car.y = canvas.height - car.height;
}

function update() {
    clear();
    drawCar();
    newPos();
    requestAnimationFrame(update);
}

function moveRight() {
    car.dx = car.speed;
}

function moveLeft() {
    car.dx = -car.speed;
}

function moveUp() {
    car.dy = -car.speed;
}

function moveDown() {
    car.dy = car.speed;
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key === 'ArrowRight' ||
        e.key === 'd' ||
        e.key === 'ArrowLeft' ||
        e.key === 'a' ||
        e.key === 'ArrowUp' ||
        e.key === 'w' ||
        e.key === 'ArrowDown' ||
        e.key === 's'
    ) {
        car.dx = 0;
        car.dy = 0;
    }
}

function mouseMove(e) {
    car.x = e.clientX - canvas.offsetLeft - car.width / 2;
    car.y = e.clientY - canvas.offsetTop - car.height / 2;
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
canvas.addEventListener('mousemove', mouseMove);
