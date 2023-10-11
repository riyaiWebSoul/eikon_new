    const React = require('react');
    const ReactDOM = require('react-dom');
    const App = require('./App');

    const rootElement = document.getElementById('root');

    ReactDOM.render(
    React.createElement(React.StrictMode, null, React.createElement(App, null)),
    rootElement
    );
