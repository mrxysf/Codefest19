var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      return
    }
  });
}




// function getCoordinates(address) {
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode({ adress: address }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       var latitude = results.geometry.location.lat();
//       var longitude = results.geometry.location.lng();
//       return [latitude, longitude];
//     }
//   });
// }


// function initMap(address) {
//   //window.onload = alert(localStorage.getitem("itemsAddress"));
//   // item = {address : "" , info : ""}
//   var itemAddress = [
//     { address: "223 N 34th St Philadelphia PA", info: "Dorm" },
//     {
//       address: "3101 Market St. Philadelphia PA",
//       info: "innovation studio"
//     }
//   ];
//   var infowindow = new google.maps.InfoWindow({});
//   var marker, i;

//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: new google.maps.LatLng(-26, 131),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });
//   function getCoordinates(address) {
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ 'address': address }, function (results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         var latitude = results[0].geometry.location.lng();
//         console.log(latitude);
//         var longitude = results[0].geometry.location.lat();
//         console.log(longitude);
//         return [latitude, longitude];
//       }
//     });
//   }

//   for (i = 0; i < itemAddress.length; i++) {
//     var coordinates = getCoordinates(itemAddress[i].address).then(
//       console.log(coordinates));
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(coordinates[0], coordinates[1]),
//       map: map
//     });

//     google.maps.event.addListener(
//       marker,
//       "click",
//       (function (marker, i) {
//         return function () {
//           infowindow.setContent(locations[i].info);
//           infowindow.open(map, marker);
//         };
//       })(marker, i)
//     );
//   }
// }

// }
