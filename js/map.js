window.onload = (function () {
    // Настройки для карты
    function initMap() {
        let map;
        map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
        });
    }
})();
