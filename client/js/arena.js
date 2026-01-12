const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = null;
let enemy = null;

function initArena(skin) {
    // إعداد اللاعب
    player = { x: 100, y: 300, size: 50, color: "blue", skin: skin, health: 100 };
    // إعداد خصم AI مؤقت
    enemy = { x: 600, y: 300, size: 50, color: "red", skin: "dragon.png", health: 100 };

    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // رسم اللاعب
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // رسم الخصم
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);

    // منطق بسيط للتقارب AI
    if (enemy.x > player.x) enemy.x -= 1;
    else enemy.x += 1;

    if (enemy.y > player.y) enemy.y -= 1;
    else enemy.y += 1;

    // الاصطدام للتحقق من الهجوم
    if (Math.abs(player.x - enemy.x) < 50 && Math.abs(player.y - enemy.y) < 50) {
        enemy.health -= 0.5;
        player.health -= 0.2; // الخصم يهاجم أيضًا
    }

    // تحقق من انتهاء المعركة
    if (player.health <= 0) {
        alert("لقد خسرت!");
        resetGame();
        return;
    } else if (enemy.health <= 0) {
        alert("لقد فزت!");
        resetGame();
        return;
    }

    requestAnimationFrame(gameLoop);
}

function resetGame() {
    location.reload();
}
