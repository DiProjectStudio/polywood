$(document).ready(function () {

  let windowWidth = $(window).width();
  const headerBgElement = $('.header__bg');

  // ТЕМНЫЙ ФОН
  function checkActiveAndToggleHeaderBg() {
    // Проверяем, есть ли у потомков первого уровня .common-wrapper класс active
    if ($('.common-wrapper > .active').length > 0) {
      // Проверяем ширину окна
      if (windowWidth >= 1200) {
        headerBgElement.hide();
        console.log("Width >= 1200, hiding header background");
      } else {
        headerBgElement.show();
      }
    }
  }

  headerBgElement.on('click', function () {
    $('#menu, #catalog, #submenu, #category').removeClass('active');
    $(this).hide();
  });

  $('#burger').on('click', () => {
    $('#menu').toggleClass('active');
    if ($('#menu').hasClass('active')) {
      $('.header__menu-nav.main-catalog .menu-nav__list').css('display', 'block');
    }
    // $('.header__menu-nav.main-catalog .menu-nav__list').css('display', 'block');
    checkActiveAndToggleHeaderBg();
    headerBgElement.show();
  });


  const headerInnerElement = $('.header__inner');
  const headerMenuWrapperElement = $('.header__menu-wrapper');
  const commonWrapperElement = $('.common-wrapper');
  const menuCatalogToMove = $('#menu .menu-nav__catalog');
  const menuToMove = $('#menu');
  const listItemCatalogEl = $('.list-item.catalog');

  const headerBarSearchEl = $('.header__bar-item#search');
  const headerBarEl = $('.header__bar');

  let leaveTimer;
  let resizeTimer;
  let submenuTimeout, hideTimeout;

  function showCommonWrapper() {
    checkActiveAndToggleHeaderBg();
    clearTimeout(leaveTimer);
    commonWrapperElement.css('left', '0');
  }

  function hideCommonWrapper() {

    leaveTimer = setTimeout(function () {
      commonWrapperElement.css('left', '-150%');
      $('.header__menu-nav.menu-nav__catalog .list-item.all-products').removeClass('active');
      // }
    }, 100);
  }

  function moveNavElement() {
    if ($(window).width() >= 1200) {
      headerInnerElement.append(menuCatalogToMove); // перемещение меню
      // headerInnerElement.append(menuToMove); // перемещение меню
      listItemCatalogEl.addClass('btn btn--yellow');
      // headerBarEl
      headerInnerElement.append(headerBarSearchEl);

      // Перемещение элементов в #catalog
      $('#category ul.menu-nav__list.category-list').each(function () {
        let category = $(this).data('category');
        let targetItem = $('#catalog ul.menu-nav__list[data-category="catalog"] li.list-item[data-category="' + category + '"]');
        if (targetItem.length) {
          $(this).appendTo(targetItem);
        }
      });


      // Обработчик клика для элементов с классом .catalog
      listItemCatalogEl.off('click').on('click', function () {
        if ($(this).hasClass('active')) {
          hideCommonWrapper();
          $(this).removeClass('active');
        } else {
          $('#category .menu-nav__list, .header__menu-title').hide();
          showCommonWrapper();
          $(this).addClass('active');
          $('#catalog').css('display', 'block');
          $('#submenu').css('display', 'none');
        }
      });


      // Обработчик наведения для остальных элементов .list-item
      $('.main-catalog .list-item').not('.catalog').not('.contacts').off('mouseenter mouseleave').on('mouseenter', function () {
        let category = $(this).data('category');


        submenuTimeout = setTimeout(function () {
          listItemCatalogEl.removeClass('active');
          showCommonWrapper();
          $('#catalog').css('display', 'none');
          $('#submenu').css('display', 'block');
          $('#submenu ul.menu-nav__list.submenu-list').hide();
          $('#submenu ul.menu-nav__list.submenu-list[data-category="' + category + '"]').show();
        }, 300);

      }).on('mouseleave', function () {
        clearTimeout(submenuTimeout);
        hideTimeout = setTimeout(function () {
          hideCommonWrapper();
          //
        }, 300);
      });

      // Обработчик для скрытия обертки при уходе курсора из .common-wrapper
      commonWrapperElement.off('mouseenter mouseleave').on('mouseleave', function () {
        if (!listItemCatalogEl.hasClass('active')) {
          hideTimeout = setTimeout(function () {
            hideCommonWrapper();
          }, 300);
        }
      }).on('mouseenter', function () {
        clearTimeout(hideTimeout);
      });

    } else {
      if (listItemCatalogEl.hasClass('btn')) {
        listItemCatalogEl.removeClass('btn btn--yellow');
      }
      menuCatalogToMove.css('order', '1');
      headerMenuWrapperElement.append(menuCatalogToMove);
      commonWrapperElement.append(menuToMove);

      // Перемещение элементов обратно в #category
      $('#catalog ul.menu-nav__list.category-list').each(function () {
        let targetList = $('#category .header__category-wrapper .header__menu-nav.menu-nav__catalog');
        if (targetList.length) {
          $(this).appendTo(targetList);
        }
      });

      headerBarEl.append(headerBarSearchEl);
    }
  }

  moveNavElement();

  $(window).resize(function () {
    moveNavElement();
    clickFunc();

    collapseHeaderContact();
    /*clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      windowWidth = $(window).width();

    }, 50);*/
  });

  function clickFunc() {

    $('#menu .list-item:not(.contacts)').on('click', function (event) {
      event.preventDefault();
    });

    // Клик на элемент меню - переход в каталог
    $('#menu .list-item[data-category="catalog"]').on('click', function () {
      $('#menu').removeClass('active');
      let category = $(this).data('category');
      // $('.header__menu-nav.main-catalog .menu-nav__list').css('display', 'none');
      $('.header__menu-title[data-category="' + category + '"], .menu-nav__list[data-category="' + category + '"]').show();
      $('#catalog').addClass('active');
      headerBgElement.show();
    });

    // Клик на элемент меню - переход в разделы
    $('#menu .list-item:not([data-category="catalog"])').on('click', function () {
      let category = $(this).data('category');
      $('#menu').removeClass('active');
      $('#submenu').addClass('active');
      $('.header__menu-title, .menu-nav__list').hide();
      $('.header__menu-title[data-category="' + category + '"], .menu-nav__list[data-category="' + category + '"]').show();
      headerBgElement.show();
    });


    // Клик на элемент каталога - переход в категории
    $('#catalog .list-item').on('click', function (event) {
      event.preventDefault();
      let category = $(this).data('category');
      $('#catalog').removeClass('active');
      $('#category').addClass('active');
      $('.header__menu-title, .menu-nav__list').hide();
      $('.header__menu-title[data-category="' + category + '"], .menu-nav__list[data-category="' + category + '"]').show();
      headerBgElement.show();
    });

    // ОБРАБОТЧИК НЕ РАСПРОСТРАНЯЕТСЯ НА 'КОНТАКТЫ' И ПОДРАЗДЕЛЫ МЕНЮ
    $('#menu .list-item.contacts, #submenu .list-item').off('click');


    // Навигационные кнопки

    $('#catalog-back, #submenu-back').on('click', function () {
      $('#catalog, #submenu').removeClass('active');
      $('#menu').addClass('active');
      $('.header__menu-title, .menu-nav__list').show();
    });

    $('#category-back').on('click', function () {
      $('#category').removeClass('active');
      $('#catalog').addClass('active');
      $('.header__menu-title, .menu-nav__list').hide();
      $('.header__menu-title[data-category="catalog"], .menu-nav__list[data-category="catalog"]').show();
    });


    $('#catalog-close, #menu-close, #category-close, #submenu-close , .header__bg').on('click', function () {
      $('#menu, #catalog, #category, #submenu').removeClass('active');
      headerBgElement.hide();
    });
  }


  // Инициализация для мобильной версии
  if (windowWidth < 1200) {
    clickFunc();
  }


  // СКРЫТИЕ / ПОКАЗ БЛОКА ХЕДЕРА НА МОБ ВЕРСИИ
  let lastScrollTop = 0;
  const mediaQuery = window.matchMedia('(min-width: 1200px)');
  // const headerInnerElement = $('.header-inner'); // Предполагаю, что у вас есть такой элемент

  function handleScroll() {
    let scrolled = $(window).scrollTop();
    let dY = scrolled - lastScrollTop;

    if (dY < 0) {
      if (mediaQuery.matches) {
        setTimeout(() => {
          headerInnerElement.removeClass('scroll');
          $(".catalog-section__filter").css('top', '97px');
        }, 100); // задержка для предотвращения дерганий
      } else {
        headerInnerElement.removeClass('scroll');
        $(".catalog-section__filter").css('top', '210px');
      }
    } else {
      headerInnerElement.addClass('scroll');
    }

    lastScrollTop = scrolled <= 0 ? 0 : scrolled;
  }

  let ticking = false;

  $(window).scroll(function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });


  // ПОИСК
  $('#search').on('click', () => {
    $('.header__search-block').toggleClass('active');
    $('#page').addClass('bg-overlay');
  });


  // перемещение элемента сервиса
  function moveHeaderServiceEl() {

    const headerLogoElement = $('.header__logo');
    const headerServiceElement = $('.header__service');
    const headerContentEl = $('.header__content');


    if ($(window).width() >= 744) {
      headerLogoElement.append(headerServiceElement);
    } else {
      headerContentEl.append(headerServiceElement);
    }
  }

  moveHeaderServiceEl();

  // РАСКРЫТИЕ КОНТАКТОВ НА ЭКРАНЕ < 744px
  function collapseHeaderContact() {
    if ($(window).width() < 744) {
      // Отключаем стандартное поведение ссылки и показываем элемент .header-contact.rus
      $('.header-contact.mos').on('click', function (event) {
        event.preventDefault(); // Отключаем стандартное поведение ссылки
        $(this).toggleClass('active');
        $('.header-contact.rus').slideToggle();

        if ($('.header-contact.mos').hasClass('active')) {
          $('.header__inner').toggleClass('border-change');
        } else {
          setTimeout(function () {
            $('.header__inner').toggleClass('border-change');
          }, 300);
        }
      });
    } else {
      // Восстанавливаем стандартное поведение ссылки и скрываем элемент .header-contact.rus
      $('.header-contact.mos').off('click');
      $('.header-contact.rus').css('display', '');
    }
  }

  collapseHeaderContact();

  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    };
  }

  $(window).resize(debounce(moveHeaderServiceEl, 100));

});