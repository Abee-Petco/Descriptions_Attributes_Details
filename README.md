# Description/Directions/Attributes/AdditionalDetails

This service builds a tabbed module that presents more detailed item information.

## Related Projects
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/elizabeth_ProxyServer
- https://github.com/PetToyCo/mainTitle_price
- https://github.com/PetToyCo/ProductRecommendations

## Table of Contents
  1. Usage
  2. Endpoints
  3. Requirements
  4. Development
  5. Production

## Usage
Please Note: This service is currently in Production mode. Please see the Production section if you need to return it to development mode, then continue with the steps below.

This service is meant to be used with a proxy server. If that is your intended use:
1. From the root directory:
npm install

2. If the database has not yet been seeded:
From within the root directory:
npm run seed

3. In client/src/index.jsx:
Make sure the proxy componentDidMount is uncommented, and the development componentDidMount is commented out. If any changes are made:
From within the root directory:
npm run react-dev

4. From within the root directory:
npm start

5. Go to the README for elizabeth_ProxyServer and follow the instructions there. Confirm that the proxy's index.html has a div tag with id='description' so that this component has a place to mount, and that the proxy's index.html has CDN script tags for "https://unpkg.com/react@16/umd/react.production.min.js" and "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"



If you need to use this service for development purposes only:
1. From the root directory:
npm install

2. If the database has not yet been seeded:
From within the root directory:
npm run seed

3. In client/src/index.jsx:
Make sure the proxy componentDidMount is commented out, and the development componentDidMount is uncommented. If any changes are made:
From within the root directory:
npm run react-dev

4. From within the root directory:
npm start

5. Navigate to localhost:3002 in the browser


## Endpoints
This service has two initial endpoints. One to retrieve an item's descriptionObject, and one to retrieve its title and primaryBrand. To retrieve data for a specific item (100-199), navigate to:

localhost:3002/descriptionObject/### 
```
JSON response format:
{
  description: {
    title: “item title”,
    description: “item description”,
    SKU: “number representing the item’s SKU”,
    primaryBrand: “the item’s brand name”,
    daysToShip: “a string representing the item’s days to ship”
   },
  directions: {
    directions: “a string containing directions and warnings about the item”
  },
  attributes: {
    primaryColor: “item’s primary color”,
    material: “item’s primary material”,
    length: “item’s length in inches as a string”,
    width: “item’s width in inches as a string”
  },
  details: {
    additionalDetails: “item’s advertising copy”
  }
 }
```

Note: It is possible to request multiple items at once for itemInformation using the format: /itemInformation/array###,###,###

Endpoint: /itemInformation/###
```
JSON response format:
{
  title: “full name of item”,
  primaryBrand: “brand name”
}
```

Endpoint: /itemInformation/array###,###
```
JSON response format:
[
{
  title: “full name of item”,
  primaryBrand: “brand name”
},
{
  title: “full name of item”,
  primaryBrand: “brand name”
}
]
```

## Additional CRUD enpoints
There are three additional developer endpoints that allow for POST, PUT and DELETE calls to manipulate documents.  These are not used in the front end application.

Endpoint: POST /descriptionObject
Content-type: application/json
```
JSON format for posting data:
{
  description: {
    title: “item title”,
    description: “item description”,
    SKU: “number representing the item’s SKU”,
    primaryBrand: “the item’s brand name”,
    daysToShip: “a string representing the item’s days to ship”
   },
  directions: {
    directions: “a string containing directions and warnings about the item”
  },
  attributes: {
    primaryColor: “item’s primary color”,
    material: “item’s primary material”,
    length: “item’s length in inches as a string”,
    width: “item’s width in inches as a string”
  },
  details: {
    additionalDetails: “item’s advertising copy”
  }
 }
```
A successful POST call will respond with a 201.
If a POST request is sent but the item page already exists, then server will respond with a 409.

Endpoint: PUT /descriptionObject/:itemId
Content-type: application/json
```
JSON format for document.
{
  description: {
    title: “item title”,
    description: “item description”,
    SKU: “number representing the item’s SKU”,
    primaryBrand: “the item’s brand name”,
    daysToShip: “a string representing the item’s days to ship”
   },
  directions: {
    directions: “a string containing directions and warnings about the item”
  },
  attributes: {
    primaryColor: “item’s primary color”,
    material: “item’s primary material”,
    length: “item’s length in inches as a string”,
    width: “item’s width in inches as a string”
  },
  details: {
    additionalDetails: “item’s advertising copy”
  }
 }
```
If item exists and is updated, then you will receive a response code of 200.
If item does not exist, then the PUT will create and new document and respond with a 201.

Endpoint: DELETE /descriptionObject/:itemId
Document at itemId will be removed and a status of 200 recieved.
If the requested document itemId is not found the server will respond with a status of 404.


## Requirements
Node 10.15.3

## Development
### Installing Dependencies
From within the root directory:
npm install

### Running Tests
This service uses Jest for unit testing of the mongoose database schema, and Jest with Enzyme for unit testing of the front-end react components.

From within the root directory:
npm run test (to run all tests)
npm run testFront (to run only the front-end enzyme tests)
npm run testBack (to run only the back-end jest tests)

## Production
To switch this service out of production mode:
1. Comment out line 7 and un-comment line 4 in database-mongodb/index.js
2. Comment out line 49 an un-comment line 46 in client/src/index.jsx
3. Comment out lines 15-17 and un-comment lines 10-12 in server.js
4. If the deployed IP has changed, make sure to replace it in the above three places.
