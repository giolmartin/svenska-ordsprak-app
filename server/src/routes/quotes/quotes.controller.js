const { getAllQuotes, getQuoteById } = require('../../models/quotes.model');
const getPagination = require('../../services/query');

async function httpGetAllQuotes(req, res) {
  console.log(req.query);
  const { skip, limit } = getPagination(req.query);
  const quotes = await getAllQuotes(skip, limit);
  return res.status(200).json(quotes);
}

//Original with no pagination
// async function httpGetAllQuotes(req, res) {
//   return res.status(200).json(await getAllQuotes());
// }

async function httpGetSingleQuoteId(req, res) {
  return res.status(200).json(await getQuoteById(req.params.id));
}

module.exports = {
  httpGetAllQuotes,
  httpGetSingleQuoteId,
};
