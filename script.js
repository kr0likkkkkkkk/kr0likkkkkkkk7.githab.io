$(document).ready(function(){
    // Инициализация слайдера
    $('.gallery-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
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
    const totalSlides = $('.gallery-slider .slide').length;
    const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
    const totalPages = Math.ceil(totalSlides / slidesPerPage);
    $('.total-pages').text(totalPages);
    
    // Обновление пейджера при изменении слайда
    $('.gallery-slider').on('afterChange', function(event, slick, currentSlide){
        const currentPage = Math.floor(currentSlide / slidesPerPage) + 1;
        $('.current-page').text(currentPage);
    });
    
    // Обновление количества страниц при изменении размера окна
    $(window).on('resize', function(){
        const newSlidesPerPage = window.innerWidth <= 768 ? 1 : 3;
        const newTotalPages = Math.ceil(totalSlides / newSlidesPerPage);
        $('.total-pages').text(newTotalPages);
        
        // Обновление текущей страницы
        const currentSlide = $('.gallery-slider').slick('slickCurrentSlide');
        const currentPage = Math.floor(currentSlide / newSlidesPerPage) + 1;
        $('.current-page').text(currentPage);
    });
});