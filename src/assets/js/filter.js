$(document).ready(function() {

  // ПОЯВЛЕНИЕ ФИЛЬТРА МОБ И ПЛАНШЕТ

  let filterContent = $('.filter-content');

// Замена содержимого 1 элемента (главная-фильтр) в нижнем меню

  const headerBarElementToChange = $('.header__bar .header__bar-item:nth-child(3)');

  if ($('body').hasClass('catalog-page')) {
    headerBarElementToChange.find('span').text('Фильтр');
    headerBarElementToChange.find('img').attr('src', 'assets/images/icon_filter.svg');
    headerBarElementToChange.on('click', function(event) {
      event.preventDefault();
      showFilter();
    });
  } else {
    headerBarElementToChange.find('span').text('Главная');
    headerBarElementToChange.find('img').attr('src', 'assets/images/icon_home.svg');
    // включаем переход по ссылке
    headerBarElementToChange.off('click');
  }

  $('.products-filter').on('click', function () {
    showFilter();
  });



  $('#applyFilter, .filter-close').on('click', function () {
    hideFilter();
  });


  $('#resetFilter').on('click', function () {
    $('.checkbox-style input:checked').prop('checked', false);
    $('.checkbox-style label').css('background-image', 'none');
  });


  $(window).resize(function () {
    if ($(window).innerWidth() >= 1200) {
      hideFilter();
    } else if ($(window).innerWidth() < 1200 && $('.filter-filter').hasClass('active')) {
      showFilter();
    }
  });

  function showFilter() {
    filterContent.addClass('active');
    $('#page').addClass('bg-overlay');
  }

  function hideFilter() {
    filterContent.removeClass('active');
    $('.page').removeClass('bg-overlay');
  }

  $("html").on("click", function (e) {
    if(!$(e.target).closest(".catalog-section__filter").length &&
      !$(e.target).closest(headerBarElementToChange).length) {
      $('#page').removeClass('bg-overlay');
      hideFilter();
    }

  });

  // РАСКРЫТИЕ ЭЛЕМЕНТОВ

  $(".filter-item .filter-options").hide();
  $(".filter-item").removeClass('expanded');

  $(".filter-head").on('click', function () {
    let filterItem = $(this).closest(".filter-item");
    let filterOptions = filterItem.find(".filter-options");

    if (filterItem.hasClass('expanded')) {
      filterOptions.slideUp(200, function() {
        filterItem.removeClass('expanded');
      });
    } else {
      filterItem.addClass('expanded');
      setTimeout(function() {
        filterOptions.slideDown();
      }, 200);
    }
  });


});