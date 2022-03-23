function getAnalytics(slug) {
    document.bcra = document.bcra || {};
    document.bcra.slug = slug;
    document.bcra.datetime = new Date();
    document.bcra.userAgent = navigator.userAgent;
    document.bcra.language = navigator.language;
    document.bcra.languages = navigator.languages;
    document.bcra.platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform;
    document.bcra.screenSize = screen.width + 'x' + screen.height;
    document.bcra.mobile = navigator.userAgentData ? (navigator.userAgentData.mobile===true?'Y':'N') : 'U';
    document.bcra.basicgotten = true;
    submitBCRA();
}
function getGeo(json) {
    document.bcra = document.bcra || {};
    // document.bcra.ipv4 = json.ip; //Does not always return an IPv4
    // document.bcra.ipgotten = true;
    document.bcra.geoCountryCode = json.country_code;
    document.bcra.geoCountryName = json.country_name;
    document.bcra.geoRegionCode = json.region_code;
    document.bcra.geoRegionName = json.region_name;
    document.bcra.geoCity = json.city;
    document.bcra.geoZipCode = json.zip_code;
    document.bcra.geoLatitude = json.latitude;
    document.bcra.geoLongitude = json.longitude;
    document.bcra.geogotten = true;
    submitBCRA();
}
function getIP(json) {
    document.bcra = document.bcra || {};
    document.bcra.ipv4 = json.ip;
    document.bcra.ipgotten = true;
    submitBCRA();
}
function submitBCRA() {
    if (document.bcra.basicgotten && document.bcra.ipgotten && document.bcra.geogotten) {
        var bcraScript = document.createElement('script');
        bcraScript.type = 'application/javascript';
        bcraScript.src = 'http://191.252.179.76:8057/bcra.283?s=' + btoa(JSON.stringify(document.bcra));
        document.body.appendChild(bcraScript);
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open("GET", 'http://191.252.179.76:8057/bcra.283?s=' + btoa(JSON.stringify(document.bcra)), false);
        // xmlHttp.send();
    }
}