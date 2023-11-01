const themeButton = document.getElementById('themeButton');
const content = document.getElementById('content');

// Обработчик события для кнопки
themeButton.addEventListener('click', () => {
    // Переключаем классы для элемента контента
    content.classList.toggle('light-theme');
    content.classList.toggle('dark-theme');
});