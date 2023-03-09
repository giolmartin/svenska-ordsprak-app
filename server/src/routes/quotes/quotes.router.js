const express = require('express');

const { getAllQuotes, getSingleQuoteId } = require('./quotes.controller');

const quotesRouter = express.Router();

quotesRouter.get('/', getAllQuotes);
quotesRouter.get('/:id', getSingleQuoteId);

module.exports = 
    quotesRouter
;
