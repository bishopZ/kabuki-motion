
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Motivation

A starter project for publishing a single-page web app that creates both a react/flux development environment and live production server.

The aim of this repo is to incorporate the best practices to building a non-trivial apps with Reactjs v0.14 and Node.

| React + flux (alt) + Immutable + Node/Express + Heroku |

## Demo site:

[https://kabuki.herokuapp.com/](https://kabuki.herokuapp.com/)

## The Technology Stack

### Server

Heroku, Node, Express

### Development Environment

Webpack, Babel, Sass, ESLint, Uglifiy

### Client

Flux Architecture with Immutable, React and Alt

#### Why alt?

alt is a wrapper on flux. I found alt's implementation to be clean and simple compared to flux with much the same speed ratings. 

## Installation

0. Install npm
1. `npm install`
2. `npm run build` this will build the files one time
2. `npm start` to run the server in development mode
3. Goto http://localhost:5000 in your browser

## Local Development Environment

1. `npm run watch` to run webpack in watch mode
2. in a new terminal window `npm start` to run the server in development mode
3. Goto http://localhost:5000 in your browser

Or run `npm run production` to run the server in production mode, without linting and sourcemaps. The raw framework is about 250k, everything else is content.

## Running on the Web

0. Install the heroku toolbelt
1. `heroku create`
2. `heroku config:set NODE_ENV=production`
3. `heroku apps:rename newname`
4. `git push heroku master`
5. `heroku open`

## Directories

`/client` contains the react files that construct the site. Run webpack while editing these files to see your changes live in the browser.

`/public` contains the public, static resources served by the server, and the rendered application javascript/css.

`/server` contains files related to the node server.

## How to Contribute:

1. Any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.
2. Coding guidelines:
 - [Airbnb's Style Guide](https://github.com/airbnb/javascript)
 - [bendc's frontend guidelines](https://github.com/bendc/frontend-guidelines)

## Credits

[react-webpack-node](https://github.com/choonkending/react-webpack-node)
Alt, Immutable, React, Sass, Webpack, Node, MongoDB, Heroku

[react-flux-starter](https://github.com/heroku/react-flux-starter)
Flux, React, Less, Gulp, Node, Heroku

License
===============
MIT
