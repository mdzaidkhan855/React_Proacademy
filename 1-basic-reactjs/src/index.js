import React from 'react';

// the below is different from one imported from react-dom/client
//import ReactDOM from 'react-dom';

import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
// let div = document.getElementById('root');
// div.append(App())

// ReactDOM.render has been deprecated in React 18
// Also the below ReactDOM belongs to react-dom, not react-dom/client
// const header = <h1>This is my first react APp</h1>
//ReactDOM.render(header,document.getElementById('root'))


// React 18 code
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);

