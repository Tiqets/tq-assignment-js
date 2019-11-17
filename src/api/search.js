/* eslint-disable import/prefer-default-export */
import http from 'http'; // Axios or another promised based http library would be usefull here


// (query: string) using typescript here would be simpler, or some other type checking helper
const fetchSearchResults = (query) => {
  if (query !== undefined && typeof query !== 'string') {
    throw new TypeError('Query needs to be a string');
  }

  const promise = new Promise((resolve, reject) => {
    if (!query) { // Bail out if no query given
      resolve([]);
    }

    const url = `http://localhost:3001/products?q=${encodeURIComponent(query)}`;
    http.get(url, (res) => {
      if (res.statusCode === 200) {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(JSON.parse(data));
        });
      } else {
        reject(new Error(`GET failed with ${res.statusCode.toString()}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
  return promise;
};

export {
  fetchSearchResults,
};
