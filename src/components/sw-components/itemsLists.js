import React from 'react';
import withData from '../HOC-helpers/withData';
import ItemsList from '../itemsList';
import SwapiService from '../../services/swapi';


const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService();

const renderName = (i) => `${i.name}`;

const renderNameAndYear = (i) => `${i.name} (${i.year})`

const withChildFunc = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

const PeopleList = withData(withChildFunc(ItemsList, renderNameAndYear), getAllPeople);

const StarshipsList = withData(withChildFunc(ItemsList, renderName), getAllStarships);

const PlanetsList = withData(withChildFunc(ItemsList, renderName), getAllPlanets);

export {
    PeopleList,
    StarshipsList,
    PlanetsList
};
