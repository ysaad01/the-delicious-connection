import axios from "axios";
const apiKey =
  "D0Rd9FHvHWn0xvzB95YSDVJ0kqaij18PJjRSQGouhBOZM9qaIa6_zXAvvWclApiE2UUeR5Eet_ddhmcQ62_EVoRNLeJ1lLAmB2yYfHROChMWvWt_TbXAVKVFq629YnYx";

export const YelpAPI = (location, price, radius) => {
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
      radius: radius,
      sort_by: "distance",
      limit: 50,
      price: price,
    },
  };

  return axios
    .get(
      "https://whispering-tor-20320.herokuapp.com/https://api.yelp.com/v3/businesses/search",
      config
    )
}

