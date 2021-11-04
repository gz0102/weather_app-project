$(document).ready(function (){
    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos){
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude
        weather(lat,long);
    }
    function error(){
        console.log("error");
    }
    function weather(lat, long){
      let url =`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
       $.getJSON(url, function(data){
               updateDoM(data);
               console.log(data);
           });
    }
    
    function updateDoM(data){
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;
        let feel = Math.round(data.main.feels_like);

        $("#city").html(city);
        $("#temp").html(temp);
        $("#desc").html(desc);
        $("#icon").attr("src", icon);
        $("#feel").html("feels like "+feel);
    }
});