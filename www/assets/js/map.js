$(document).ready(function () {

  if ($('#map').length) {
    let resizeTimer;
    let myMap;

    function initMap() {
      if ($('#map').length && !myMap) {
        ymaps.ready(init);
      }
    }

    function init() {
      myMap = new ymaps.Map('map', {
        center: centerPoint,
        zoom: 16,
        controls: []
      });

      $.each(placemarks, function (index, obj) {
        var placemark = new ymaps.Placemark(obj.coordinates,
          {
            iconContent: 'Polywood'
          },
          {
            preset: 'islands#brownStretchyIcon'
          });

        myMap.geoObjects.add(placemark);
      });

      ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
    }

    // Инициализация карты при загрузке страницы
    initMap();

    // Обработчик изменения размера окна, иницализация карты снова
    $(window).resize(function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (myMap) {
          myMap.destroy();
          myMap = null;
        }
        initMap();
      }, 50);
    });
  }


});