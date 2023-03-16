const API_URL = 'v1';

async function httpGetAllQuotes(query) {
  //URL search params needs to be a string
  const params = new URLSearchParams(query).toString();
  const response = await fetch(`/${API_URL}/quotes?${params}`);
  console.log(params);
  return await response.json();
}

async function httpGetSingleQuoteId(id) {
  const response = await fetch(`/${API_URL}/quotes/${id}`);
  return await response.json();
}

export { httpGetAllQuotes, httpGetSingleQuoteId };
