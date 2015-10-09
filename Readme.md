
# in development

## Motivation

To build a basic single-page node application using react.js that already had the associated files needed to run it as a node.js server on Heroku.

## Installation

1. `npm install`
2. `npm run build` this will build the files one time

## Running Locally

1. `npm run watch` to run webpack in watch mode
2. in a new terminal window `npm start` to run the server in development mode
3. Goto http://localhost:5000 in your browser

Or run `npm run production` to run the server in production mode. 

## Running on the Web

1. `heroku create`
2. `heroku apps:rename newname`
3. `git push heroku master`
4. `heroku open`

## Directories

`/client` contains the react files that construct the site. Run webpack while working on these files.
`/public` contains the public/static resources served by the server.
`/server` contains files related to the node server.

## Credits

React, Sass, Webpack, Node, MongoDB, Heroku
https://github.com/choonkending/react-webpack-node

React, Less, Gulp, Node, Heroku
https://github.com/heroku/react-flux-starter

### MIT License
