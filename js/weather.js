/**
 * Created by john on 5/18/17.
 */
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
} else {
    loadWeather("San Diego, CA", "");
}


function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function (weather) {
            city = weather.city;
            temp = weather.temp + "°";
            wcode = '<img class="weathericon" src="images/weathericons/'+ weather.code + '.svg>';
            wind = '<img class="dropicon" src="images/Wind.svg"<p style="display: inline-block">'+weather.wind.speed+' ' + weather.units.speed +'</p>';
            humidity = 'Humidity: '+weather.humidity + ' %';
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },
        error: function (error) {
            $(".error").html('<p>'+error+'</p>');
        }
    });
}