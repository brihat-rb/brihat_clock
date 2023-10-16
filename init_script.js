var today = new Date();
var ad_year = today.getFullYear();

var sunrise_url = 'https://raw.githubusercontent.com/brihat-rb/brihat_calendar/main/data/sunrise_sunset_json/sunrise_' + ad_year + '.json';
var sunset_url = 'https://raw.githubusercontent.com/brihat-rb/brihat_calendar/main/data/sunrise_sunset_json/sunset_' + ad_year + '.json';

var sunrise_req = new XMLHttpRequest();
var sunset_req = new XMLHttpRequest();

var sunrises = "";
var sunsets = "";

var sunrisesunset_json_loaded = false;

sunrise_req.open('GET', sunrise_url, false);
sunrise_req.onload = function () {
    sunrises = JSON.parse(this.response);
    sunrise_json = true;
    console.info("Sunrise Times (for", ad_year, "AD): Loaded.");
}
sunrise_req.onerror = function () {
    sunrise_json = false;
    console.error("Sunrise Times (for", ad_year, "AD): Loading Failed.");
}
try {
    sunrise_req.send();
}
catch (error) {
    sunrise_json = false;
}

sunset_req.open('GET', sunset_url, false);
sunset_req.onload = function () {
    sunsets = JSON.parse(this.response);
    sunset_json = true;
    console.info("Sunset Times (for", ad_year, "AD): Loaded.");
}
sunset_req.onerror = function () {
    sunset_json = false;
    console.error("Sunset Times (for", ad_year, "AD): Loading Failed.");
}
try {
    sunset_req.send();
}
catch (error) {
    sunset_json = false;
}

if (sunrise_json && sunset_json)
    sunrisesunset_json_loaded = true;
