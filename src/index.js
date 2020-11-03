import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MyProvider} from './context/MyContext'

ReactDOM.render(<MyProvider><App /></MyProvider>, document.getElementById('root'));
registerServiceWorker();