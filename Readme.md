
<!--- ![Kabuki](https://s-media-cache-ak0.pinimg.com/736x/bf/5b/71/bf5b71d406c0c8d48a9e313b64edf663.jpg =250x) -->

[![npm version](https://badge.fury.io/js/kabuki-motion.svg)](https://badge.fury.io/js/kabuki-motion)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

# New in version 0.0.4: Redux!

After working with both redux and alt, I found redux more difficult to use, but providing specific advantages. Redux's reducers provide a consistent and scalable place for the data juggling logic that alt leaves unorganized in various data stores. In the long term, redux is more scalable because it has better separation of concerns.

# Motivation

Kabuki-motion is a starter project for publishing a single-page web app with web animators in mind. It creates both a react/flux development environment and live production server.

The react application comes pre-built with one-directional flux architecture and example components that make use of the React-Motion library.

The aim of this repo is to incorporate the best practices to building non-trivial apps with Reactjs v0.14 that include Heroku support.

Other boilerplates that include Heroku support also require the MongoDB addon, which is free now, but may not be in the future. This library does not require any Heroku addons.

| React + Redux + WebPack + Heroku |

## Heroku Demo Site

[http://kabuki.venicetexas.com/](http://kabuki.venicetexas.com/)

# The Technology Stack

## Server

+ Heroku
+ Node
+ Express

## Development Environment

+ Webpack
+ Babel
+ Sass
+ ESLint
+ Uglifiy

#### Why Webpack?

While Gulp is an easier to use syntax, Webpack provides a more professional approach and is quickly gaining market share.

## Client

+ React v0.14
+ Flux Architecture with Redux
+ React-Motion for preformant animation

#### Why React-Motion?

For 95% of use-cases of animating components, we don't have to resort to using hard-coded easing curves and duration. Set up a stiffness and damping for your UI element, and let the magic of physics take care of the rest. This way, you don't have to worry about petty situations such as interrupted animation behavior. It also greatly simplifies the animation API and provides a powerful alternative to React's TransitionGroup.

# Installation

1. Install node.js and the heroku toolbelt
1. in a new terminal window, run `git clone https://github.com/bishopZ/kabuki-motion.git`
1. `cd kabuki-motion`
1. `npm install`
1. `npm run build` this will build the files one time
1. `npm start` to run the server in development mode
1. Goto `http://localhost:5000` in your browser

## Running the Local Development Environment

1. `npm run watch` to run webpack in watch mode
1. in a new terminal window, run `npm start` to run the server in development mode
1. Goto `http://localhost:5000` in your browser

Or run `npm run production` to run the server in production mode, without linting and source maps. The raw framework is about 250k, everything else is content.

## Running the Server on the Web

1. Install the heroku toolbelt
1. `heroku create`
1. `heroku apps:rename newname`
1. `git push heroku master`
1. `heroku open`

## Directories

`/client` contains the react files that construct the site. Run webpack while editing these files to see your changes live in the browser.
`/client/App.jsx` is the main point of entry for the React application.

`/public` contains the public, static resources served by the server, and the rendered application javascript and css files.

`/server` contains files related to the node server.
`/server/app.js` creates the node server.
`/server/routes.js` creates the node server's routing.
`/server/view.ejs` is the HTML view for the React single-page application.

# How to Contribute

1. Any suggestions/improvements/comments/bugs can be in the form of a Pull Requests or Github issue.
1. Coding guidelines:
   - [Airbnb's Style Guide](https://github.com/airbnb/javascript)
   - [bendc's frontend guidelines](https://github.com/bendc/frontend-guidelines)

## Credits

[react-motion](https://github.com/chenglou/react-motion) - a spring that solves your animation problems

[react-webpack-node](https://github.com/choonkending/react-webpack-node) - Alt, Immutable, React, Sass, Webpack, Node, MongoDB, Heroku

[react-flux-starter](https://github.com/heroku/react-flux-starter) - Flux, React, Less, Gulp, Node, Heroku

## License

MIT
