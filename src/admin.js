import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './admin/index.js';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'));
}

render(App);

if (module.hot) {
    module.hot.accept('./admin/index.js', () => {
        const NextApp = require('./admin/index.js').default;
        render(NextApp);
    });
}

registerServiceWorker();
