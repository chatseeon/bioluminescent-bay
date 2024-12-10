// 获取 body 元素
const body = document.body;

// 生成荧光点
function createLight() {
    const light = document.createElement('div');
    light.classList.add('light');

    // 随机位置
    light.style.top = `${Math.random() * 100}vh`;
    light.style.left = `${Math.random() * 100}vw`;

    // 随机动画延迟
    light.style.animationDelay = `${Math.random() * 5}s`;

    // 随机大小
    const size = Math.random() * 5 + 3; // 3px 到 8px
    light.style.width = `${size}px`;
    light.style.height = `${size}px`;

    body.appendChild(light);

    // 自动移除，避免内存泄漏
    setTimeout(() => light.remove(), 10000);
}

// 创建多个荧光点
function init() {
    for (let i = 0; i < 100; i++) {
        createLight();
    }

    // 持续生成新荧光点
    setInterval(createLight, 300);
}

// 初始化效果
init();
