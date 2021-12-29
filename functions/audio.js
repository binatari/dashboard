const axios = require("axios");

exports.handler = async function (event, context) {
    const url = 'https://twelve-data1.p.rapidapi.com/time_series'
    try {
      const {data} = await  axios.get(url,  {
        params: {
          symbol: event.queryStringParameters.currency,
          interval: "1day",
          outputsize: "2",
          format: "json",
        },
        headers: {
          "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.RAPID_KEY}`,
        },
      })
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (err) {
        const {statusCode, statusText, headers, data} = err.response;
      return {
        statusCode: 500,
        body: JSON.stringify({ statusCode, statusText, headers, data }),
      };
    }
  };