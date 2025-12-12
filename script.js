$(document).ready(function(){
    // Инициализация слайдера
    $('.gallery-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false, // Отключаем centerMode для упрощения логики
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
        const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
        return Math.ceil(totalSlides / slidesPerPage);
    }
    
    // Обновление пейджера
    function updatePager() {
        const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
        const totalPages = calculateTotalPages();
        const currentSlide = $('.gallery-slider').slick('slickCurrentSlide');
        
        // Простой расчет текущей страницы
        const currentPage = Math.floor(currentSlide / slidesPerPage) + 1;
        
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