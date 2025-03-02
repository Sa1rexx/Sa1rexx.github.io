// Добавляем несколько фоновых изображений для анимации
const images = [
    'background1.jpg',
    'background2.jpg',
    'background3.jpg'
];

let index = 0;

function changeBackground() {
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-animation';

    const img = document.createElement('img');
    img.src = images[index];
    bgContainer.appendChild(img);

    document.body.appendChild(bgContainer);

    setTimeout(() => {
        bgContainer.remove();
    }, 10000);

    index = (index + 1) % images.length;
}

setInterval(changeBackground, 10000);
changeBackground(); // Запускаем анимацию сразу при загрузке страницы