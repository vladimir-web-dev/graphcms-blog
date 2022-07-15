# Setup

- nextjs
- tailwindcss
- graphql

- graphql-request

npx create-next-app -e with-tailwindcss ./
npm i graphql graphql-request html-react-parser moment react-multi-carousel sass

# General

- slug is used for page navigation
- the whole app is wrapped with layout
- all not page components go to components folder
- in next js we make server calls in getStaticProps function
- we can minimise the amount of api calls by preloading all the data in the homecontroller, and then using it
- data stored as ritch text on the graphcms is returned as array of objects of different types, so you need a function to handle it
- when having errors with graphql api/queries/mutation:
  - check your variables
  - try/catch console log the errors (remember that api route are the server, so check the error in the terminal)

# GraphQL

- our calls to the CMS are stored in the services folder (we are decoupling the api calls)
- we use import { request, gql } from "graphql-request"; to query graphql
- the queries themselves can be generated using UI right in the CMS
- graphQL queries follow JS object layout

- to connect to graphCMS:

  - API Link we can get in settings>environments (store it in .env)
  - initiate API access in settings > API Access

# Routing

Next js has file based routing. The routes mirror the file structure in the pages folder

- pages/index.js -> /
- pages/post/[slug].js -> /post/slug-name
- pages components have access to getStaticProps and getStaticPaths. getStaticProps is used for fetching data. getStaticPath must be implements in dynamic pages
  to tell nextjs how to render the paths

# Questions

- useEffect vs getStaticProps
- when to load data
- how to check network calls, how many should there be
- what is a slug
