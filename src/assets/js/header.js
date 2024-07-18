$(document).ready(function () {

// ТЕМНЫЙ ФОН
  function checkActiveAndToggleHeaderBg() {
    // Проверяем, есть ли у потомков первого уровня .common-wrapper класс active
    if ($('.common-wrapper > .active').length > 0) {
      // Проверяем ширину окна
      if ($(window).width() >= 1200) {
        $('.header__bg').hide();
        console.log("Width >= 1200, hiding header background");
      } else {
        $('.header__bg').show();
        // console.log("Width < 1200, showing header background");
      }
    }
  }

  $('#burger').on('click', () => {
    $('#menu').toggleClass('active');
    // checkActiveAndToggleHeaderBg();
    $('.header__bg').show();
  });


  const headerInnerElement = $('.header__inner');
  const headerMenuWrapperElement = $('.header__menu-wrapper');
  const commonWrapperElement = $('.common-wrapper');
  const menuCatalogToMove = $('#menu .menu-nav__catalog');
  const menuToMove = $('#menu');
  const listItemCatalogEl = $('.list-item.catalog');

  let leaveTimer;


  function moveNavElement() {
    if ($(window).width() >= 1200) {
      headerInnerElement.append(menuCatalogToMove); // перемещение меню
      // headerInnerElement.append(menuToMove); // перемещение меню

      listItemCatalogEl.addClass('btn btn--yellow');

      menuCatalogToMove.find('.list-item.all-products').off('click').on('click', function () {
        if ($(this).hasClass('active')) {
          // hideCommonWrapper();
        } else {
          $('#category .menu-nav__list, .header__menu-title').hide();
          // showCommonWrapper();
          $(this).addClass('active');
        }
      })

    } else {
      if(listItemCatalogEl.hasClass('btn')) {
        listItemCatalogEl.removeClass('btn btn--yellow');
      }
      menuCatalogToMove.css('order', '1');
      headerMenuWrapperElement.append(menuCatalogToMove);
      commonWrapperElement.append(menuToMove);
    }
  }

  moveNavElement();

  $(window).resize(function () {
    moveNavElement();
    clickFunc();


    // moveCatalogImage();
  });

// ТЕМНЫЙ ФОН
  $('.header__bg').on('click', function () {
    $('#menu, #catalog, #category').removeClass('active');
    $(this).hide();
  });

  function clickFunc() {

    // $('.header__catalog-tabs .catalog-tab.all-products, #menu .list-item.all-products').on('click', function () {
    $('.header__catalog-tabs .catalog-tab.all-products').on('click', function () {
      $('#catalog').addClass('active');
      $('.header__bg').show();
    })

    $('.header__catalog-tabs .catalog-tab:not(.promotions):not(.all-products), #menu .list-item:not(.promotions):not(.all-products)').on('click', function () {
      let category = $(this).data('category');

      $('.header__bg').show();
      $('#menu .list-item, #catalog .list-item').removeClass('active');

      // Показываем соответствующие списки категорий и заголовок
      $('#category .menu-nav__list, .header__menu-title').hide();
      $('#category .menu-nav__list[data-category="' + category + '"], .header__menu-title[data-category="' + category + '"]').show();

      $('#category').addClass('active');
    });

    $('#catalog .list-item').on('click', function () {
      let category = $(this).data('category');

      $('#catalog .list-item').removeClass('active');

      // Показываем соответствующие списки категорий и заголовок
      $('#category .menu-nav__list, .header__menu-title').hide();
      $('.header__menu-title[data-category="all-products"]').show();
      $('#category .menu-nav__list[data-category="' + category + '"], .header__menu-title[data-category="' + category + '"]').show();
      $('#category').addClass('active');
    });

    // Навигационные кнопки
    $('#catalog-back').on('click', function () {
      $('#catalog').removeClass('active');
      $('#menu').addClass('active');
    });

    $('#category-back').on('click', function () {
      $('#category').removeClass('active');
      $('#catalog').addClass('active');
      $('.header__menu-title[data-category="all-products"]').show();
    });

    $('.header__menu-nav.menu-nav__catalog .list-item.all-products').on('click', function () {
      console.log('header__menu-nav.menu-nav__catalog .list-item.all-product');
      $('#menu').removeClass('active');
      $('#catalog').addClass('active');
      // $('.header__menu-title[data-category="all-products"]').show();
    });

    $('#catalog-close, #menu-close, #category-close, .header__bg').on('click', function () {
      $('#menu, #catalog, #category').removeClass('active');
      $('.header__bg').hide();
    });
  }

// Инициализация для мобильной версии
  if ($(window).width() < 1200) {
    clickFunc();
  }

// Инициализация для десктопной версии
  if ($(window).width() >= 1200) {
    $('#catalog .list-item').on('click', function () {
      console.log("Catalog item clicked, width >= 1200");
      $('.header__bg').css('display', 'none');
      let category = $(this).data('category');

      $('#catalog .list-item').removeClass('active');
      $(this).addClass('active');

      // Показываем соответствующие списки категорий и заголовок
      $('#category .menu-nav__list, .header__menu-title').hide();
      // $('.header__menu-title[data-category="all-products"]').show();
      $('#category .menu-nav__list[data-category="' + category + '"]').show();

      $('#category').addClass('active');
    });

    // ПУНКТ МЕНЮ О КОМПАНИИ

    $('.list-item.about.nav-block').on('mouseenter', function () {
      let $navBlock = $(this);
      if ($navBlock.data('timeoutId')) {
        clearTimeout($navBlock.data('timeoutId'));
      }
      $navBlock.addClass('expanded');
      $navBlock.find('.nav-block__list').stop(true, true).slideDown();
    }).on('mouseleave', function () {
      let $navBlock = $(this);
      let timeoutId = setTimeout(function () {
        $navBlock.removeClass('expanded');
        $navBlock.find('.nav-block__list').stop(true, true).slideUp();
      }, 100); // Задержка в 300 мс
      $navBlock.data('timeoutId', timeoutId);
    })
  }

// СКРЫТИЕ / ПОКАЗ БЛОКА ХЕДЕРА НА МОБ ВЕРСИИ

  function getToggleHeight() {
    return $('.header__content').outerHeight();
  }

  let lastScrollTop = 0;
  let toggleHeight = getToggleHeight();
  let hysteresis = 50;

  $(window).scroll(function () {
    let st = $(this).scrollTop();
    if ($(window).width() < 744) {
      if (st > lastScrollTop) {
        // Скролл вниз
        if (st > toggleHeight + hysteresis) {
          $('.header__service').hide();
        }
      } else {
        // Скролл вверх
        if (st < toggleHeight - hysteresis) {
          $('.header__service').show();
        }
      }
    }

    lastScrollTop = st <= 0 ? 0 : st; // Не позволяет lastScrollTop быть отрицательным

    // скрываем вcплывающее меню на десктопе при скролле
    /*if ($(window).width() >= 1200) {
      if ($(this).scrollTop() > 250) {
        // hideCommonWrapper();
      }
    }*/
  });
});