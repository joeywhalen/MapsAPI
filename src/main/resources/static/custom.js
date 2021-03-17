var map;
var contentString = '<h2>' + city + ', ' + state + '</h2>';
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 10,
        scrollwheel: false
    });

    var image = {url:'ASF.png', scaledSize: new google.maps.Size(50, 50)};

    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    });

    var contentString = '<h2>La Paz, Mexico</h2> <p>Where your dreams come true.</p>';

    var infowindow = new google.maps.InfoWindow({
    	   content: contentString
    	 });

    	 google.maps.event.addListener(marker, 'click', function() {
    	    infowindow.open(map,marker);
    	 });
}

//var map;
//var coords = {lat: 39.9612, lng: -82.9988};
//
//function initMap(){
//    map = new google.maps.map(document.getElementById('map'),{
//        center: coords,
//        zoom: 10,
//        scrollwheel: false
//    });
//};
//
//var image = {
//    url: '/custom_marker.png',
//    scaledSize: new google.maps.Size(50,50),
//};
//
//var marker = new google.maps.Marker({
//    position: coords,
//    map:map,
//    icon: image,
//    animation: google.maps.animation.BOUNCE
//});
//
//var contentString = '<h2>Columbus, OH</h2> <p>Where your dreams come true!</p>';
//
//var infowindow = new google.maps.InfoWindow({
//    content: contentString
//});
//
//google.maps.event.addEventlistener(marker, 'click', function(){
//    infowindow.open(map, marker);
//});
