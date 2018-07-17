// map options
function map () {
  var mapProp= {
    center:new google.maps.LatLng(40.7128,-74.0060),
    zoom: 13,
  };

// new map
  var map=new google.maps.Map(document.getElementById('googleMap'),mapProp);
}

// map marker

var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);
