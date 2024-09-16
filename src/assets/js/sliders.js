$(document).ready(function() {

    const commonAboutSliderOptions = {
        loop: true,
        /*on: {
            slideChange: function() { updateNavArrows(this); },
            init: function() { updateNavArrows(this); },
        },*/

        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
    };

    const newsSlider = new Swiper(".news .swiper", {
        ...commonAboutSliderOptions,

        pagination: {
            el: '.news .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.news .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.news .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
    });

    const promosSlider = new Swiper(".promos.slider-section .swiper", {
        ...commonAboutSliderOptions,

        pagination: {
            el: '.promos.slider-section .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.promos.slider-section .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.promos.slider-section .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
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
    const detailProductSlider = new Swiper(".product-page .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.product-page .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.product-page .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.product-page .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

    });

    const categoryHeadSlider = new Swiper(".category-head .swiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        autoHeight: true,

        pagination: {
            el: '.category-head .swiper-pagination',
            clickable: true
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
        ...commonAboutSliderOptions,

        pagination: {
            el: '.category-products .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.category-products .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.category-products .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
    });

    const materialsSlider = new Swiper(".materials .swiper", {
        ...commonAboutSliderOptions,

        pagination: {
            el: '.materials .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.materials .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.materials .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
    });

    const popularSlider = new Swiper(".popular .swiper", {
        ...commonAboutSliderOptions,

        pagination: {
            el: '.popular .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.popular .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.popular .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
    });
    const alsoBuySlider = new Swiper(".also-buy .swiper", {
        ...commonAboutSliderOptions,

        pagination: {
            el: '.also-buy .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.also-buy .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.also-buy .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
    });
    const componentsSlider = new Swiper(".components .swiper", {
        ...commonAboutSliderOptions,

        pagination: {
            el: '.components .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.components .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.components .swiper-nav-arrow.swiper-nav-arrow--prev',
        },
    });

    const portfolioSlider = new Swiper(".portfolio .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        /*on: {
            slideChange: function() { updateNavArrows(this); },
            init: function() { updateNavArrows(this); },
        },*/

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
    const galleryProductSlider = new Swiper(".gallery .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        /*on: {
            slideChange: function() { updateNavArrows(this); },
            init: function() { updateNavArrows(this); },
        },*/

        pagination: {
            el: '.gallery .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.gallery .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.gallery .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

        }
    });
    const productDocSlider = new Swiper(".product-docs .swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        on: {
            slideChange: function() { updateNavArrows(this); },
            init: function() { updateNavArrows(this); },
        },

        pagination: {
            el: '.product-docs .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.product-docs .swiper-nav-arrow.swiper-nav-arrow--next',
            prevEl: '.product-docs .swiper-nav-arrow.swiper-nav-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
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

    // отображение/скрытие стрелок слайдера в зависимости от количества слайдов

    function updateNavArrows(swiper) {
        const $prevArrow = $(swiper.params.navigation.prevEl);
        const $nextArrow = $(swiper.params.navigation.nextEl);

        const totalSlides = swiper.slides.length;
        const slidesPerView = swiper.params.slidesPerView;


        if (totalSlides <= slidesPerView) {
            $prevArrow.css('display', 'none');
            $nextArrow.css('display', 'none');
        }

    }

});