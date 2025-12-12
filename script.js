$(document).ready(function(){
    // Инициализация слайдера
    $('.gallery-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // Получаем все слайды
    const totalSlides = $('.gallery-slider .slide').length;
    
    // Обновление пейджера
    function updatePager() {
        const currentSlide = $('.gallery-slider').slick('slickCurrentSlide');
        const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
        
        // Для десктопа показываем от 1 до 8 (или до 7, если хотите)
        let currentPage, totalPages;
        
        if (window.innerWidth <= 768) {
            // Мобильная версия: 1 слайд = 1 страница
            totalPages = totalSlides;
            currentPage = currentSlide + 1;
        } else {
            // Десктопная версия: каждая позиция (группа из 3 слайдов) = 1 страница
            // Всего у нас 8 слайдов, показываем по 3 за раз
            // Это значит страниц: 6 (позиций: 1-3, 2-4, 3-5, 4-6, 5-7, 6-8, 7-1, 8-2)
            // Но обычно считают 8/3 ≈ 3 страницы. Вам нужно 7?
            
            // Вариант 1: Показываем от 1 до 8 (по количеству слайдов)
            totalPages = totalSlides; // 8
            currentPage = (currentSlide % totalSlides) + 1;
            
            // Вариант 2: Если хотите именно 7 страниц
            // totalPages = 7;
            // currentPage = Math.min(Math.floor(currentSlide / slidesPerPage) + 1, 7);
        }
        
        $('.total-pages').text(totalPages);
        $('.current-page').text(currentPage);
    }
    
    // Инициализация
    updatePager();
    
    // События
    $('.gallery-slider').on('afterChange', updatePager);
    $(window).on('resize', function(){
        setTimeout(updatePager, 100);
    });
});
