## Things to consider

- Is scripting necessary to accomplish the responsive behaviour?

For the submenu hover actions, we can do this with plain css using :hover. This also works on most mobile devices as touch events fire :hover. 
For the mobile hamburger menu, even though in most mobile browsers the touch action will fire the hover event we are hiding and showing
the open and close buttons and this is much simpler to do with JS. It can get quite messy structuring the html so the hover states of the menu are 
triggered correctly and that we dont have to css select any previous siblings. 


- Does it make sense to implement this with static HTML, or with React? Why?
Either would be viable depending on the use case, I have chosen to use React here as this is what the rest of our small site is running so it would 
introduce some unnecessary context switching for any future devlopers if this was not in React.

- How would transitions or animations improve this implementation? Can you add them?
We can animate css changes with teh transition: property. Things like max-height and good targets for this technique.

- At which viewport size should the responsive behaviour change? In other words, what should the media query breakpoint be? How do you decide that?
This would depend on a bunch of factors - how big the menu is going to be, how many items we want to put in it, the primary target audience for our website (tablet, phone, desktop). I have gone with 768px which is a standard size in the bootstrap world. 
In real world sites it makes sense to have multiple media breakpoints for complex components such as this so that the user experience for all devices is 
tailored for that device size.

- The expanding sub-menus on hover can be done with CSS only, or with JS. Which one makes more sense here, and why?
This is easiest todo with just plain css and the :hover
