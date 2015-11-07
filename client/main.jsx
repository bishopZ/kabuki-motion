import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Router, {Route} from 'react-router';
import 'styles/main.scss';
import StageManager from './StageManager';

/* 
  This is the Main entry-point.
  
  We are using react-router purely for the browser history, which creates
  a single-page application. StageManager does custom routing based on 
  the pages in "/stores/pages.js".
*/

const target = document.getElementById('app');
var history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="*" component={StageManager} />
  </Router>
  , target
);
