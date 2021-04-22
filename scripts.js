mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFueGQiLCJhIjoiY2tuc2Z6d3BpMHVoNzJ2bzlncGRqajR0MyJ9.Qq4F_V3tUessSoVj27bfww';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude], 14);
}

function errorLocation(){
    setupMap([0,0], 2);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15
    })
  
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })
  
    map.addControl(directions, "top-left")
  }