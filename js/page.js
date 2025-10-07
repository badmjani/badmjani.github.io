// --- کد جاوااسکریپت برای بک‌گراند متحرک ---

const canvas = document.getElementById('coding-bg');
const ctx = canvas.getContext('2d');

// تنظیم اندازه کانواس برابر با اندازه صفحه
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// کاراکترهایی که می‌افتند (می‌تونی تغییرشون بدی)
const matrix = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\",./<>?ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
const matrixArray = matrix.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

// آرایه‌ای برای نگهداری موقعیت Y هر ستون
const drops = [];
for(let x = 0; x < columns; x++) {
    drops[x] = Math.random() * -100; // شروع از موقعیت‌های تصادفی
}

// تابع اصلی برای کشیدن انیمیشن
function draw() {
    // رنگ نیمه‌شفاف برای ایجاد افکت "تریل"
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // تنظیم فونت و رنگ کاراکترها
    ctx.fillStyle = '#0F0'; // رنگ سبز ماتریکس
    ctx.font = fontSize + 'px monospace';

    // کشیدن کاراکترها
    for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // اگر کاراکتر به پایین صفحه رسید، دوباره از بالا شروع کن
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// اجرای مداوم انیمیشن
setInterval(draw, 35);

// در صورت تغییر اندازه پنجره، اندازه کانواس رو آپدیت کن
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});