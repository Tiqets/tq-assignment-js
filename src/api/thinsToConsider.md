## Things to consider

- How should the function handle error cases? For example: what happens if the server is down?
The api should reject with the error for the front end to decide what to do with.
In this case the front end will simply populate the results with an empty array and the network error will get logged in the console

- What happens if the search comes empty? Is that an error or a normal case? Why?
An empty result is a normal use case, if the status code is a 200.