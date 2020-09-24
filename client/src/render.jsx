import DescriptionService from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.hydrate(<DescriptionService initData={window.__initData__} initCurrent={'descriptionB'}/>, document.getElementById("description"));