# Redux

## Your task

Coded's Zoo is a digital zoo where visitors can view animals.

Currently, the whole zoo relies on an initial state inside the `index.js` file that is passed down between components as a prop.

Use Redux to move this to a global state structure using Redux's `provider` and the `reducer.js` file to add the logic.

The website is already fully functional, adding Redux should not change any of the website's functionality, just the code.

Good luck!

> To test your work, run `yarn test` in the project directory.

## Why?

While in this zoo exmaple it might feel that adding Redux made things more complicated, imagine if we wanted to add the ability to watch
a specific gorilla in the gorillas cage. Imagine we could click on a single gorilla there and we could feed it and it would grow.

Now, now, don't get all dreamy about growing gorillas, but focus on the implementation details. If clicking on a specific
gorilla opened up a new modal, which had inisde it that singular gorilla, we would have needed to pass the functions that set the cage all the way from `App.js` to `ZooAnimals.js` to `AnimalCage.js` to the hypothetical `SpecificAnimalView.js`.

Redux eliminates this. It makes the state a big floating global thing that any component could easily just "plug" into to read, edit, and watch. It's magical!

Besides this magic, Redux gives us the benefit of easier debugging, more straighforward testing, and generally more robust code.

Despite all of that, Redux is not always needed. If your app is small and doesn't have a very complicated state (like our zoo example actually) Redux is not really that useful. You can also consider using MobX for state management in React.
