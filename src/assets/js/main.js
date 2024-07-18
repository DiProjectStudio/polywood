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

  $('.select').on('click', function () {
    $('.select').not(this).removeClass('active');
    $(this).toggleClass('active');
    $('.select-options').slideUp();
    if ($(this).hasClass('active')) {
      $(this).find('.select-options').slideDown();
    }
  });

  function checkScreenSize() {
    if ($(window).width() >= 744) {
      $('.general-tabs').addClass('tabs');
      $('.general-tabs .option').addClass('tab');
    } else {
      $('.general-tabs').removeClass('tabs');
      $('.general-tabs .option').removeClass('tab');
    }
  }

  // Проверка размера экрана при инициализации
  checkScreenSize();

  // Проверка размера экрана при изменении размера окна
  $(window).resize(checkScreenSize);


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

});