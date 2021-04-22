mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFueGQiLCJhIjoiY2tuc2Z6d3BpMHVoNzJ2bzlncGRqajR0MyJ9.Qq4F_V3tUessSoVj27bfww';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(){
    
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });
}