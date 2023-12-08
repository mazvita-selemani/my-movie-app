import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

//this gets the div with the id of "root" and injects the App component into it

ReactDom.render(<App/>, document.getElementById('root'))