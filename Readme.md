
<!--- ![Kabuki](https://s-media-cache-ak0.pinimg.com/736x/bf/5b/71/bf5b71d406c0c8d48a9e313b64edf663.jpg =250x) -->

[![npm version](https://badge.fury.io/js/kabuki-motion.svg)](https://badge.fury.io/js/kabuki-motion)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Motivation

Kabuki-motion is a starter project for publishing a single-page web app with web animators in mind. It creates both a react/flux development environment and live production server.

The react application comes pre-built with one-directional flux architecture and example components that make use of the React-Motion library.

The aim of this repo is to incorporate the best practices to building a non-trivial apps with Reactjs v0.14 that include Heroku support.

Other boilerplates that include Heroku support also require the MongoDB addon, which is free now, but may not be in the future. This library does not require any Heroku addons.

| React + Flux (Alt) + Immutable + Node/Express + Heroku |

## Heroku Demo Site

[http://kabuki.venicetexas.com/](http://kabuki.venicetexas.com/)

## The Technology Stack

### Server

- Heroku
- Node
- Express

### Development Environment

- Webpack
- Babel
- Sass
- ESLint
- Uglifiy

#### Why Webpack?

While Gulp is an easier to use syntax, Webpack provides a more professional approach and is quickly gaining market share.

### Client

- React v0.14
- Flux Architecture with Immutable and Alt
- React-Motion for preformant animation

#### Why alt?

alt is a wrapper on flux. I found alt's implementation to be clean and simple compared to flux with much the same speed ratings. 

#### Why React-Motion?

For 95% of use-cases of animating components, we don't have to resort to using hard-coded easing curves and duration. Set up a stiffness and damping for your UI element, and let the magic of physics take care of the rest. This way, you don't have to worry about petty situations such as interrupted animation behavior. It also greatly simplifies the animation API and provides a more powerful alternative for React's TransitionGroup.

## Installation

0. Install npm
1. `npm install`
2. `npm run build` this will build the files one time
2. `npm start` to run the server in development mode
3. Goto http://localhost:5000 in your browser

## Running the Local Development Environment

1. `npm run watch` to run webpack in watch mode
2. in a new terminal window `npm start` to run the server in development mode
3. Goto http://localhost:5000 in your browser

Or run `npm run production` to run the server in production mode, without linting and sourcemaps. The raw framework is about 250k, everything else is content.

## Running the Server on the Web

0. Install the heroku toolbelt
1. `heroku create`
2. `heroku apps:rename newname`
3. `git push heroku master`
4. `heroku open`

## Directories

`/client` contains the react files that construct the site. Run webpack while editing these files to see your changes live in the browser.
`/client/main.jsx` is the main point of entry for the React application.

`/public` contains the public, static resources served by the server, and the rendered application javascript/css.

`/server` contains files related to the node server.
`/server/app.js` creates the node server
`/server/routes.js` creates the node server's routing
`/server/view.ejs` is the HTML view for the React's single-page application

## How to Contribute:

1. Any suggestions/improvements/comments/bugs can be in the form of Pull Requests, or creating an issue.
2. Coding guidelines:
 - [Airbnb's Style Guide](https://github.com/airbnb/javascript)
 - [bendc's frontend guidelines](https://github.com/bendc/frontend-guidelines)

## Credits

[react-motion](https://github.com/chenglou/react-motion)

[react-webpack-node](https://github.com/choonkending/react-webpack-node)
Alt, Immutable, React, Sass, Webpack, Node, MongoDB, Heroku

[react-flux-starter](https://github.com/heroku/react-flux-starter)
Flux, React, Less, Gulp, Node, Heroku

License
===============
MIT
