const express = require('express');

const { httpGetAllQuotes, httpGetSingleQuoteId } = require('./quotes.controller');

const quotesRouter = express.Router();

quotesRouter.get('/', httpGetAllQuotes);
quotesRouter.get('/:id', httpGetSingleQuoteId);

module.exports = 
    quotesRouter
;
