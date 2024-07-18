$(document).ready(function() {

    const newsSlider = new Swiper(".news .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.news .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.news .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.news .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    const detailProjectSlider = new Swiper(".project-detail .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.project-detail .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.project-detail .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.project-detail .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

    });

    const projectsSlider = new Swiper(".projects-slider .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.projects-slider .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.projects-slider .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.projects-slider .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        }

    });
    const categoryProductsSlider = new Swiper(".category-products .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.category-products .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.category-products .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.category-products .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

        }

    });

    const portfolioSlider = new Swiper(".portfolio .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.portfolio .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.portfolio .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.portfolio .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

        }
    });

    let generalInfoSlider;
    let generalInfoInit;

    const generalInfo = () => {

        if ($('.general-info-page__extra .extra__items .swiper').length && $(window).width() < 1200 && !generalInfoInit) {
            generalInfoInit = true;
            generalInfoSlider = new Swiper('.general-info-page__extra .extra__items .swiper', {
                slidesPerView: 1,
                spaceBetween: 10,

                pagination: {
                    el: '.extra__items .swiper-pagination',
                    clickable: true
                },

                navigation: {
                    nextEl: '.general-info-page__extra .swiper-nav-arrow.swiper-nav-arrow--next',
                    prevEl: '.general-info-page__extra .swiper-nav-arrow.swiper-nav-arrow--prev',
                },

                breakpoints: {
                    360: {
                        slidesPerView: 1,
                    },
                    744: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                },




            });
        } else if ($(window).width() >= 1200) {
            if (typeof generalInfoSlider !== 'undefined') {
                generalInfoInit = false;
                generalInfoSlider.destroy();
            }
        }
    }

    generalInfo();

    $(window).on('resize', () => {
        generalInfo();
    });

});