const express = require('express');

const { getAllQuotes } = require('./quotes.controller');

const quotesRouter = express.Router();

quotesRouter.get('/', getAllQuotes);

module.exports = quotesRouter;
