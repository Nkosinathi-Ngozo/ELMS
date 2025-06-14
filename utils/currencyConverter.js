const axios = require('axios');

async function convertCurrency(amount, from, to) {
  try {
    const response = await axios.get(`https://api.frankfurter.app/latest`, {
      params: { amount, from, to }
    });
    return response.data;
  } catch (error) {
    console.error('Conversion failed:', error.message);
    return null;
  }
}

// Example usage
convertCurrency(100, 'ZAR', 'USD').then(data => console.log(data));

module.exports = {convertCurrency}