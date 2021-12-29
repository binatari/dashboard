const axios = require("axios");

exports.handler = async function (event, context) {
    const url = 'https://alpha-vantage.p.rapidapi.com/query'
    try {
      const {data} = await  axios.get(url,  {
        params: {to_currency: `${event.queryStringParameters.second}`, function: 'CURRENCY_EXCHANGE_RATE', from_currency: `${event.queryStringParameters.first}`},
        headers: {
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
          'x-rapidapi-key': `${process.env.RAPID_KEY}`
        }
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