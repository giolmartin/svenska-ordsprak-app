const { populateQuotes } = require('../../models/quotes.model');

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

async function getAllQuotes(req, res) {
  console.log('Getting all quotes ...');
  const quotes = await populateQuotes(res.status);
  return res.status(200).json(quotes);
}

module.exports = {
  getAllQuotes,
};
