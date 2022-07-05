"use strict";

const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
  "D0Rd9FHvHWn0xvzB95YSDVJ0kqaij18PJjRSQGouhBOZM9qaIa6_zXAvvWclApiE2UUeR5Eet_ddhmcQ62_EVoRNLeJ1lLAmB2yYfHROChMWvWt_TbXAVKVFq629YnYx";

const searchRequest = {
  
  location: "Las Vegas, NV",
};

const client = yelp.client(apiKey);

client
  .search(searchRequest)
  .then((response) => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  })
  .catch((e) => {
    console.log(e);
  });
