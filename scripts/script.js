window.onload = function() {
    const aboutMeLink = document.getElementsByClassName('about-me-link')[0];
    const calculatorLink = document.getElementsByClassName('calculator-link')[0];

    // навешиваем обработчики для смены фреймов
    aboutMeLink.onclick = function() {
        document.getElementById('main-frame').attributes.src.value = 'pages/page_about_me.html';
    };

    calculatorLink.onclick = function() {
        document.getElementById('main-frame').attributes.src.value = 'pages/calculator.html';
    };
};