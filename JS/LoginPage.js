function getCoordinates(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ adress: address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var latitude = results.geometry.location.lat();
      var longitude = results.geometry.location.lng();
      return [latitude, longitude];
    }
  });
}

function initMap() {
  //window.onload = alert(localStorage.getitem("itemsAddress"));

  var infowindow = new google.maps.InfoWindow({});
  var marker, i;

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(-26, 131),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  for (i = 0; i < itemsAddress.length; i++) {
    coordinates = getCoordinates(results[i].address);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(coordinates[0], coordinates[1])
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i].info);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
