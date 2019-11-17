/* eslint-disable import/prefer-default-export */
import axios from 'axios'; // This is a super easy to use promise based fetch library, so much better than the default node implementation

// (query: string) using typescript here would be simpler, or some other type checking helper
const fetchSearchResults = (query) => {
  if (query !== undefined && typeof query !== 'string') {
    throw new TypeError('Query needs to be a string');
  }

  const promise = new Promise((resolve, reject) => {
    if (!query) { // Bail out if no query given
      resolve([]);
    }
    const url = `${process.env.REACT_APP_API_URL}/products?q=${encodeURIComponent(query)}`;
    axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        }
      }).catch((err) => {
        reject(err);
      });
  });

  return promise;
};

export {
  fetchSearchResults,
};
