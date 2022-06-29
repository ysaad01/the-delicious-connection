// vars for geo api
var geoUrl = "https://api.openweathermap.org//geo/1.0/zip?";
var apiKey = "28dc3ffecf9f41325703aa618a323db2";

// endpoint for lat and lon lookup
export const getGeoLoc = (zipcode) => {
  return fetch(geoUrl + "appid=" + apiKey + "zip=" + zipcode + ",us");
};

