# Hooks with Rick and Morty

### Difficulty: 🟣 Easy

## Project URL

🚀 You can check the project working in the following link: https://wfercanas.github.io/Rick-and-Morty/

## Project Description

This app lets you see some basic data about the main characters of Rick and Morty. When displayed, you can add them to favorites or remove them.
If you want to, you can toggle the site between light and dark theme.

## Installation

In order to make a local installation, you should execute:

```bash
npm install
npm run start
```

## Technologies Used

React (Hooks).

## Special Challenges

1. Create a context to provide the theme the app must use. Then, when each component makes use of the context provided, has to define its style to adapt depending if it the theme is set to light or dark.
2. Fetch the characters data using an effect. If something goes wrong, the app must be able to render a fallback UI.
3. When filtering characters, some filters may have been calculated prior, especially when you are typing. Use memoization to reduce the number of times the filter executes.
4. Create a custom hook that fetches the API and return the set of characters. This instead of creating everytime a state and then appliying and effect to control this part of the app.
5. Control the adding or removing of favorite characters with a Reducer.

## Key Concepts

1. Hooks: useState(), useEffect(), useReducer(), useMemo(), useContext(), useCharacters() -this is a custom hook-
2. Error boundaries.

## Acknowledgements

Thanks to Óscar Barajas ([@gndx](https://twitter.com/gndx)) for explaining this concepts within the React Hooks Professional Course in Platzi.💚
