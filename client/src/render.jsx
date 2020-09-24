import DescriptionService from './index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.hydrate(<DescriptionService initData={{
  description: {
    title: 'Gorgeous Concrete Shirt',
    description: 'Impedit dicta voluptatem ut velit tempore non a id ipsum. Minus non quam. Voluptatem qui deleniti ipsam quisquam ex. Ut facere sequi dolorem recusandae consequatur rerum. Sit est quam magnam quia sit labore quidem quo et.',
    SKU: 9254349,
    primaryBrand: 'Ebert LLC',
    daysToShip: 'Ships In 7 Business Days'
  },
  directions: {
    directions: 'Quisquam voluptas delectus ex ratione rerum. Nam sed aperiam voluptatibus aut et possimus est saepe. Fugit et voluptatem et molestias temporibus quasi est dolor a. Adipisci recusandae et.'
  },
  attributes: {
    primaryColor: 'fuchsia',
    material: 'Plastic',
    length: '0 IN',
    width: '7 IN'
  },
  details: {
    additionalDetails: 'Quidem et aut in. Molestias impedit voluptates. Explicabo minima accusantium adipisci in accusantium vero autem.'
  }
}}/>, document.getElementById("description"));