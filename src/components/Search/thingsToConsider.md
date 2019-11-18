## Things to consider

- The form must be responsive. It must adapt to the width of the container.
- Imagine we want to reuse the `<input />` and the `<button>` in other places. How would you make those two pieces reusable?
They would have their own components that are importable, with some styles to ensure they always look consistant

- Is a spec file needed for this task? If yes, what would you test in the spec? If no, why not?
e2e and ui tests are always good to have, and with small simple components like the button and input it is relativly easy to set up
so its something that we should always try to do. 