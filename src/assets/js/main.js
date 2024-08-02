$(document).ready(function () {

  // INPUT MASK PHONE NUMBER
  $('.phone-mask').inputmask({
    "mask": "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,

    onBeforePaste: function (pastedValue, opts) {
      return pastedValue.replace(/^8/, '');
    }
  });

  // ACCORDION
  $('.accordion__visible').on('click', function () {
    $(this).parent().toggleClass('expanded');
  })

  // SELECT

  function handleSortingSelect() {
    // Обработчик для всех элементов .sorting-select
    $('.sorting-select').off('click').on('click', function () {
      if ($(this).closest('.step-section.config').length > 0  || $(this).closest('.catalog-section').length > 0) {
        $('.sorting-select').not(this).removeClass('active');
        $(this).toggleClass('active');
        $('.select-options').slideUp();
        if ($(this).hasClass('active')) {
          $(this).find('.select-options').slideDown();
        }
      } else if ($(window).width() < 744) {
        $('.sorting-select').not(this).removeClass('active');
        $(this).toggleClass('active');
        $('.select-options').slideUp();
        if ($(this).hasClass('active')) {
          $(this).find('.select-options').slideDown();
        }
      }
    });
  }

  // СОРТИРОВКА ТОВАРОВ
  let defaultText = $('.catalog-section__sorting .option:first').text();
  $('.catalog-section__sorting.sorting-select span').text(defaultText);

  $('.catalog-section__sorting .option').on('click', function (event) {
    event.stopPropagation();
    let selectedText = $(this).text();
    $(this).closest('.sorting-select').find('span').text(selectedText);
    $('.option').removeClass('active');
    $(this).addClass('active');
    $('.sorting-select').removeClass('active');
    $('.select-options').slideUp();
  });

  handleSortingSelect();


  function checkScreenSize() {
    if ($(window).width() >= 744) {
      $('.general-tabs').addClass('tabs');
      $('.general-tabs .option').addClass('tab');
    } else {
      $('.general-tabs').removeClass('tabs');
      $('.general-tabs .option').removeClass('tab');
    }
  }

  checkScreenSize();

  $(window).resize(function() {
    handleSortingSelect();
    checkScreenSize();
  });


  // ЗАГРУЗКА ФАЙЛА РЕЗЮМЕ

  $('.inputfile').each(function() {
    let input = $(this);
    let label = input.next();
    let uploadSpan = label.find('span.upload');
    let formatSpan = label.find('span.format');
    let labelVal = uploadSpan.html();

    input.on('change', function(e) {
      let fileName = '';
      if (this.files && this.files.length === 1) {
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) {
        uploadSpan.text(fileName);
        formatSpan.text('text size'); // Здесь можно будет добавить реальный размер файла
      } else {
        uploadSpan.html(labelVal);
        formatSpan.text('pdf, doc, docx, txt');
      }
    });
  });

  // PRODUCT TABS
  $('.product-tab').click(function () {
    let tabsContentEl = $('.tabs-content');

    $('.product-tab').removeClass('active');
    $(this).addClass('active');

    tabsContentEl.removeClass('active');

    let index = $(this).index();
    tabsContentEl.eq(index).addClass('active');

    if (tabsContentEl.eq(index).hasClass('reviews')) {
      $('.reviews__item-text').each(function () {
        handleReadMore($(this), $(this).closest('.reviews__item').find('.reviews__item-read'), 96);
      });

      $('.reviews__content').off('click', '.reviews__item-read').on('click', '.reviews__item-read', function () {
        let $textElement = $(this).closest('.reviews__item').find('.reviews__item-text');
        toggleTextCollapse($(this), $textElement, 'Свернуть', 'Показать ещё');
      });
    }
  });

  // ACTIVE COLORS
  $('.color').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('.color').removeClass('active');
    $(this).addClass('active');
  })

  $('.size').on('click', function () {
    $('.size').removeClass('active');
    $(this).addClass('active');
  })
  $('.unit').on('click', function () {
    $('.unit').removeClass('active');
    $(this).addClass('active');
  })


  // СКРОЛЛ К ФОРМЕ ОТПРАВИТЬ ОТЗЫВ

  $("#leave-review").click(function () {
    let offset = $(".reviews__leave-review").offset().top;
    let headerHeight = $(".header__inner").outerHeight() + $(".header__bar").outerHeight();

    $('html, body').animate({
      scrollTop: offset - headerHeight
    }, 500);
  });


  // REVIEWS

  function handleReadMore($textElement, $readMoreButton, maxHeight) {
    if ($textElement[0].scrollHeight > maxHeight) {
      $readMoreButton.css('display', 'flex');
    } else {
      $readMoreButton.css('display', 'none');
    }

    $readMoreButton.on('click', function () {
      toggleTextCollapse($(this), $textElement, 'Свернуть', 'Подробнее');
    });
  }

  // Общая функция для обработки кликов на кнопки "Показать ещё"/"Свернуть"
  function toggleTextCollapse($button, $textElement, collapsedText, expandedText) {
    $textElement.toggleClass('text-collapse');

    if ($textElement.hasClass('text-collapse')) {
      $button.find('span').text(collapsedText);
      $button.find('svg').css('transform', 'rotate(-180deg)');
    } else {
      $button.find('span').text(expandedText);
      $button.find('svg').css('transform', 'rotate(0)');
    }
  }

  // ТОВАР ДОБАВЛЕН В КОРЗИНУ

  $('.addToCart').on('click', function () {
    $(this).text('В корзине');
    $(this).addClass('active');
    $('.product-in-cart').addClass('show');

    console.log('1')

    setTimeout(function () {
      $('.product-in-cart').removeClass('show');
    }, 5000);
  })

});