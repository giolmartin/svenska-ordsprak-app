const axios = require('axios');
const SVENSKA_ORDSPRAK_URL =
  'https://giolmartin.github.io/svenska-ordsprak-API/data/svenska-ordsprak.json';

async function populateQuotes() {
  console.log('Downloading quotes ...');
  const response = await axios.get(SVENSKA_ORDSPRAK_URL);

  //   console.log(response);
  let quoteAndTranslation = {};
  if (response.status !== 200) {
    console.log('Problem downloading quotes');
    throw new Error('Quote download failed');
  }

  const quoteDocs = response.data; //docs is the array of quotes
  for (quoteDoc of quoteDocs) {
    const text = quoteDoc['text'];
    const translation = quoteDoc['translation-EN'];

    quoteAndTranslation = {
      text: text,
      translation: translation,
    };
    // console.log(`Text ${text}  Translation ${translation}`);
  }
  return quoteAndTranslation;
}

module.exports = {
  populateQuotes,
};
