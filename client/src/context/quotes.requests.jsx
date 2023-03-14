const API_URL = 'v1';

async function httpGetAllQuotes(query) {
  console.log('Fetching all quotes');

  const params = new URLSearchParams(query).toString();
  const response = await fetch(`/${API_URL}/quotes?${params}`);
  console.log(params);
  console.log('Response: ', response);
  const data = await response.json();
  return data;
}

async function httpGetSingleQuoteId(id) {
  const response = await fetch(`/${API_URL}/quotes/${id}`);
  console.log('Response Single Quote: ', response);
  return await response.json();
}

export { httpGetAllQuotes, httpGetSingleQuoteId };
