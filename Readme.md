
# in development

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Motivation

A starter project for publishing a single-page web app that creates both a react/flux development environment and live production server.

The aim of this repo is to incorporate the best practices to building a non-trivial apps with Reactjs and Node.

I am working to document this repo extensively so it would be easy for both beginners and experts to begin dev-ing on it without pulling your hair out.

| React + alt(flux) + Immutable + Node/Express + Heroku |

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

Having isomorphic React was one of my key criteria when choosing a Flux library, which helped narrow down the scope of libraries.

I found alt's implementation to be clean and simple, and like the option of allowing us to create alt instances or using singletons (and flushing the stores). I also like the direction in which alt is heading.

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

## How to Contribute:

1. As this repo is still in its baby stages, any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.
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
