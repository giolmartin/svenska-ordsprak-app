const axios = require('axios');

const quotes = require('./quotes.mongo');

const SVENSKA_ORDSPRAK_URL =
  'https://giolmartin.github.io/svenska-ordsprak-API/data/svenska-ordsprak.json';

async function populateQuotes() {
  /**
   * 1. Download quotes from the API
   * 2. Save quotes to the DB
   * 3. Verify that the quotes are saved in the DB
   */

  const response = await downloadFromAPI();

  const quoteDocs = response.data; //docs is the array of quotes

  //IIf DB is erased, empty or needs to be updated with new quotes the following two lines should be
  //commented out with their corresponding closing bracket.
  const isDBEmpty = (await getAllQuotes()).length === 0;
  if (isDBEmpty) {
    if (quoteDocs) {
      let counter = 1;
      for (quoteDoc of quoteDocs) {
        const text = quoteDoc['text'];
        const translation = quoteDoc['translation-EN'];

        const quote = {
          id: String(counter),
          quote: text,
          translation: translation,
        };
        await saveQuote(quote);
        counter++;
      }
    } else {
      console.log('No quotes to save');
    }
  }

  // countQuotesInDocument();
}

async function downloadFromAPI() {
  const response = await axios.get(SVENSKA_ORDSPRAK_URL, {
    query: {},
  });

  if (response.status !== 200) {
    console.log('Problem downloading quotes');
    throw new Error('Quote download failed');
  }
  return response;
}

async function saveQuote(quote) {
  const quoteDoc = {};
  try {
    //pass what should be created
    await quotes.findOneAndUpdate(
      {
        id: quote.id,
        quote: quote.quote,
        translation: quote.translation,
      },
      {
        id: quote.id,
        quote: quote.quote,
        translation: quote.translation,
      },
      {
        upsert: true, //insert + update
      }
    );
  } catch (err) {
    console.log(`Could not save quote ${quoteDoc} to DB: ${err}`);
  }
}

//Gets all quotes from the DB or paginated quotes set to 20 per page
async function getAllQuotes(skip, limit) {
  return await quotes.find({}, '-_id -__v').skip(skip).limit(limit);
}

async function getQuoteById(id) {
  const MAX_ID = (await getAllQuotes()).length;
  const ID_NUMBER_OUT_OF_RANGE_STRING = `There is no quote with that id, please try again with a number between 1 and ${MAX_ID}`;

  //Check if quote_ID exists before finding it
  if (id > 0 && id <= MAX_ID) {
    const quote = await quotes.find({ id: id }, '-_id -__v');
    return quote;
  } else {
    return ID_NUMBER_OUT_OF_RANGE_STRING;
  }
}

// helper function to verify that the quotes are saved in the DB
async function countQuotesInDocument() {
  const numberOfQuotes = (await getAllQuotes()).length;
  console.log(`There are ${numberOfQuotes} quotes in the document`);
}

module.exports = {
  getQuoteById,
  getAllQuotes,
  populateQuotes,
};
