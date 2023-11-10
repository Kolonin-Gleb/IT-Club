$('.memberBlock').slick({
    dots: false,
    adaptiveHeight: true,
});

$(".intro").slick({
    slidesToShow: 8 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
});

$("#events > .smaller > .slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="aue"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="auf"><i class="fas fa-chevron-right"></i></button>',
    // autoplay: true,
    // autoplaySpeed: 3500
});

