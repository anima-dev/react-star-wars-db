// import React from 'react';
// import ReactDOM from 'react-dom';


import SwapiService from './swapi';

const swapi = new SwapiService();

swapi.getPerson(5)
    .then((body) => console.log(body));