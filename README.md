# starwars-api

React app that consumes the Star Wars API to present information about characters, starships, and planets from the Star Wars universe.

## Technologies Used

- [Vite](https://vitejs.dev/): Fast, opinionated web dev build tool
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development
- [React Router](https://reactrouter.com/): Declarative routing for React applications
- [Hero Icons](https://heroicons.com/): Beautiful hand-crafted SVG icons for your web projects
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript
- [React Query](https://react-query.tanstack.com/): Data fetching and caching library for React
- [SWAPI (Star Wars API)](https://swapi.dev/): The Star Wars API for fetching detailed information about characters, starships, and planets from the Star Wars universe

## Features

- Display list of Star Wars characters, starships, and planets fetched from SWAPI (Star Wars API)
- Details pages for each category (characters, starships, planets) providing additional information
- Pagination for efficiently navigating through multiple pages of characters, starships, and planets

## Project Outcomes

- Implemented React Query for performing external data fetching operations, learned how to use dynamic query variables on the useQuery hook and manage multiple queries depedent on each other. Additionally learned on managing the state and reder UI dynamically based on React Query.

- Pagination: Successfully integrated pagination functionality, which allows users to browse through multiple pages of characters, starships, and planets.

- Tailwind CSS and Vite Setup: Configured Tailwind CSS along with Vite and created custom UI components with Tailwind CSS.

- REST API Integration: Consumed and Interacted with an external REST API to fetch and display data dynamically.

## Project Setup

This project was bootstrapped with [Vite](https://vitejs.dev/guide/)

To get started you need to:

- Clone the project
- Install listed dependencies
- Run available scripts

### Install dependencies

```
yarn install
```

### Run React dev server (http://localhost:3000)

```
yarn dev
```

### To build for production

```
yarn build
```

## Deployment

To deploy this project run

```
  yarn run deploy
```
