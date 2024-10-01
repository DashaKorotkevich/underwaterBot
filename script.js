const links = document.querySelectorAll('.mobile-overlay__link');
const mobileOverlay = document.getElementById('mobileOverlay');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    //о тменяет стандартное поведение ссылки.
    event.preventDefault();

    // getAttribute('href'): Получает значение атрибута href для перехода к нужному элементу.
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    //  scrollIntoView({ behavior: 'smooth' }): Прокручивает к элементу с плавной анимацией.
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    mobileOverlay.close();
  });
});