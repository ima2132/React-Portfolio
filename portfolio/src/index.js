import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faLinkedinIn, faGithub, faEnvelope, faDownload);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

