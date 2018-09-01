import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/support/css/bootstrap.min.css';
//import '../src/support/css/owl.carousel.min.css';
import '../src/support/css/style.css';
import '../src/support/css/themify-icons.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
<App />, 

document.getElementById('root'));

registerServiceWorker();
