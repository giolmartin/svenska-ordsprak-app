const axios = require('axios');
const { getAllQuotes } = require('../routes/quotes/quotes.controller');

const SVENSKA_ORDSPRAK_URL =
  'https://giolmartin.github.io/svenska-ordsprak-API/data/svenska-ordsprak.json';

const quoteAndTranslation = [];
let counter = 0;

async function populateQuotes() {
  console.log('Downloading quotes ...');
  const response = await axios.get(SVENSKA_ORDSPRAK_URL);

  //   console.log(response);

  if (response.status !== 200) {
    console.log('Problem downloading quotes');
    throw new Error('Quote download failed');
  }

  const quoteDocs = response.data; //docs is the array of quotes
  for (quoteDoc of quoteDocs) {
    const text = quoteDoc['text'];
    const translation = quoteDoc['translation-EN'];

    quoteAndTranslation.push({
      id: String(counter),
      text: text,
      translation: translation,
    });
    counter++;
    // console.log(`Text ${text}  Translation ${translation}`);
  }
  return quoteAndTranslation;
}

async function getQuoteById(id) {
  const quotes = await populateQuotes();

  const quote = quotes.find((quote) => quote.id === id);
  return quote;
}

module.exports = {
  populateQuotes,
  getQuoteById,
};
