
# in development

## Motivation

A starter project for publishing a single-page web app that creates both a react/flux development environment and live production server.

## The Technology Stack

### Server

Heroku, Node, Express

### Development Environment

Webpack, Babel, Sass, ESLint, Uglifiy

### Client

Flux Architecture with Immutable, React and Alt

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

[react-webpack-node](https://github.com/choonkending/react-webpack-node)
Alt, Immutable, React, Sass, Webpack, Node, MongoDB, Heroku

[react-flux-starter](https://github.com/heroku/react-flux-starter)
Flux, React, Less, Gulp, Node, Heroku

### MIT License
