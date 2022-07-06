import axios from "axios";
const apiKey =
  "D0Rd9FHvHWn0xvzB95YSDVJ0kqaij18PJjRSQGouhBOZM9qaIa6_zXAvvWclApiE2UUeR5Eet_ddhmcQ62_EVoRNLeJ1lLAmB2yYfHROChMWvWt_TbXAVKVFq629YnYx";

export const YelpAPI = (location) => {
  const config = {
    headers: {
      accept: "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${apiKey}`,
    },
    params: {
      term: "restaurants",
      location: location,
      radius: 10000,
      sort_by: "distance",
      limit: 50,
    },
  };

  axios
    .get(
      "https://whispering-tor-20320.herokuapp.com/https://api.yelp.com/v3/businesses/search",
      config
    )
    .then((response) => {
      console.log(response); //These are the results sent back from the API!
    });

}

