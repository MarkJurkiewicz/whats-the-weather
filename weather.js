/**
 * Created by maj on 5/20/16.
 */




$(function () {  //doc ready

    if ("geolocation" in navigator) {
    $('#showTemp').click(function () {
        navigator.geolocation.getCurrentPosition(gotLocation);
    });
    } else {
        alert('Your browser doesnt support geolocation. Sorry.');
    }

});



function gotLocation(position) {
    var lat = position.coords.latitude; // finds latitude
    var lon = position.coords.longitude; // finds longitude
    var api_key = '302a96b6941cd7ba4c9a75d0333859b2';
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + api_key;


    console.log(position);

    //ajax call to Openweather.com API
    $.ajax({
        dataType: 'json',
        url : api_url,
        method : 'GET',
        success : function (data) {
            var allData = data.main.temp;
            var location = data.name;
            var cToFahren = Math.round(allData * 9 / 5 + 32);
            $('#result').text(cToFahren + '°' + 'in ' + location);
            console.log(data);
        }
    });
}
