import withData from '../HOC-helpers/withData';
import ItemsList from '../itemsList';
import SwapiService from '../../services/swapi';

const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService();

const PeopleList = withData(ItemsList, getAllPeople);

const StarshipsList = withData(ItemsList, getAllStarships);

const PlanetsList = withData(ItemsList, getAllPlanets);

export {
    PeopleList,
    StarshipsList,
    PlanetsList
};




