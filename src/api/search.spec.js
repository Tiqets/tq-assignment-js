/* global describe, it, expect */
import { fetchSearchResults } from './search';

describe('fetchSearchResults', () => {
  // Replace `it` for `it` in each test
  it('Returns a promise', () => {
    expect(fetchSearchResults()).toBeInstanceOf(Promise);
  });

  it('Returns an empty response if no query is given', (done) => fetchSearchResults().then((results) => {
    expect(results).toEqual([]);
    done();
  }));

  it('Returns an empty response if query is ""', (done) => fetchSearchResults('').then((results) => {
    expect(results).toEqual([]);
    done();
  }));

  it('Throws if query has not type `string`', () => {
    expect(() => {
      fetchSearchResults({});
    }).toThrow(TypeError);

    expect(() => {
      fetchSearchResults([]);
    }).toThrow(TypeError);

    expect(() => {
      fetchSearchResults(NaN);
    }).toThrow(TypeError);

    expect(() => {
      fetchSearchResults(12345);
    }).toThrow(TypeError);

    expect(() => {
      fetchSearchResults(true);
    }).toThrow(TypeError);
  });

  it('Returns an array of products when a query is given', (done) => {
    const expected = [
      {
        productUrl:
          'https://www.tiqets.com/en/barcelona-c66342/sagrada-familia-fast-track-p918256',
        image:
          'https://aws-tiqets-cdn.imgix.net/images/content/3ca6b020234e47448d46547ff3ac6b3f.jpg?auto=format&fit=crop&h=500&ixlib=python-1.1.2&q=70&w=500&s=04a6235ad28f4e3ce24d3db42d3dc3de',
        id: 918256,
        title: 'Sagrada Familia: Fast Track',
        price: 17.0,
        summary:
          "Make seeing the Sagrada Familia the first thing you do in Barcelona! The lines can be long, so join the many people who visited Barcelona's top attraction with our fast-track tickets and save yourself time and money.",
      },
    ];

    return fetchSearchResults('sagrada familia').then((results) => {
      expect(results).toEqual(expected);
      done();
    });
  });
});
