import React from 'react';
import withData from '../HOC-helpers/withData';
import ItemsList from '../itemsList';
import withSwapi from '../HOC-helpers/withSwapi';

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

const mapPersonMethodsToProps = ({getAllPeople}) => {
    return {
        getData: getAllPeople
    };
};

const mapStarshipMethodsToProps = ({getAllStarships}) => {
    return {
        getData: getAllStarships
    };
};

const mapPlanetMethodsToProps = ({getAllPlanets}) => {
    return {
        getData: getAllPlanets
    };
};

const PeopleList = withSwapi(withData(withChildFunc(ItemsList, renderNameAndYear)), mapPersonMethodsToProps);

const StarshipsList = withSwapi(withData(withChildFunc(ItemsList, renderName)), mapStarshipMethodsToProps);

const PlanetsList = withSwapi(withData(withChildFunc(ItemsList, renderName)), mapPlanetMethodsToProps);

export {
    PeopleList,
    StarshipsList,
    PlanetsList
};
