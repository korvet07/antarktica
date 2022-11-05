const DEFAULT_COORDINATES = [59.938635, 30.323118];
const DEFAULT_ZOOM = 15.5;
const PIN_SIZE = [18, 22];
const PIN_OFSET_SIZE = [-18, -22];
const mapContainer = document.querySelector('#map');

const createMap = () => {
  let myMap;
  let myPlacemark;
  ymaps.ready(init);
  function init() {
    myMap = new ymaps.Map(mapContainer, {
      center: DEFAULT_COORDINATES,
      zoom: DEFAULT_ZOOM,
    });

    myPlacemark = new ymaps.Placemark(DEFAULT_COORDINATES, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/pin.svg',
      iconImageSize: PIN_SIZE,
      iconImageOffset: PIN_OFSET_SIZE,
    });

    myMap.geoObjects.add(myPlacemark);
  }
};
export { createMap, mapContainer };
