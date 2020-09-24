import DescriptionService from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(window.__initData__)

var bullets = window.__initData__.description.description.split('. ');
window.__initData__.description.description = bullets;

ReactDOM.hydrate(<DescriptionService initData={window.__initData__}/>, document.getElementById("description"));