'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const App = require('./components/app.jsx');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);