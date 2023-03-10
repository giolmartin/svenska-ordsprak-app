const { getAllQuotes, getQuoteById } = require('../../models/quotes.model');

// const quotes1 = [
//   {
//     text: 'Adam sköt skulden på Eva och Eva på ormen.',
//     'translation-EN': 'Adam put the blame on Eve and Eve on the serpent.',
//   },
//   {
//     text: 'Adel utan dygd är lykta utan ljus.',
//     'translation-EN': 'Nobility without virtue is a lantern without light.',
//   },
//   {
//     text: 'Adjö, Svenserud, sa Päte, när han reste till Amerika och aldrig kom dit.',
//     'translation-EN':
//       'Goodbye, Svenserud, said Päte, when he traveled to America and never got there.',
//   },
// ];

async function httpGetAllQuotes(req, res) {
  console.log('Getting all quotes ...');
  return res.status(200).json(await getAllQuotes());
}

async function httpGetSingleQuoteId(req, res) {
  console.log('Getting quote by id ...');
  return res.status(200).json(await getQuoteById(req.params.id));
}

module.exports = {
  httpGetAllQuotes,
  httpGetSingleQuoteId,
};
