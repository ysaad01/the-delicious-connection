import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY

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

