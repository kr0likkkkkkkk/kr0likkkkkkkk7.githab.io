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
    
    // Расчет общего количества страниц
    function calculateTotalPages() {
        const totalSlides = $('.gallery-slider .slide').length;
        // Всегда показываем общее количество слайдов как количество страниц
        return totalSlides;
    }
    
    // Обновление пейджера
    function updatePager() {
        const totalPages = calculateTotalPages();
        const currentSlide = $('.gallery-slider').slick('slickCurrentSlide');
        const totalSlides = $('.gallery-slider .slide').length;
        
        // Рассчитываем текущую страницу (от 1 до 8, а не до 3)
        // Используем модуль для обработки infinite режима
        const actualSlide = currentSlide % totalSlides;
        const currentPage = actualSlide + 1;
        
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
