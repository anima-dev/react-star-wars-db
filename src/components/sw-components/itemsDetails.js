import React from 'react';
import ItemDetails, {Record} from '../itemDetails';
import SwapiService from '../../services/swapi';
import ErrorBoundry from '../errorBoundry';

const {getPerson, getPlanet, getStarship} = new SwapiService();

const PersonDetails = ({itemId}) => {
    return (
        <ErrorBoundry msg={'The person data expired!!!'}>
                <ItemDetails getItem={getPerson} itemId={itemId}>
                    <Record label="Gender" field="gender"/>
                    <Record label="Date of Birth" field="year"/>
                    <Record label="Eye Color" field="eyes"/>
                </ItemDetails>
        </ ErrorBoundry>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
    <ItemDetails getItem={getStarship} itemId={itemId}>
        <Record label="Name" field="name"/>
        <Record label="Length" field="length"/>
        <Record label="Manufacturer" field="manufacturer"/>
    </ItemDetails>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails getItem={getPlanet} itemId={itemId}>
            <Record label="Name" field="name"/>
            <Record label="Length" field="length"/>
            <Record label="Manufacturer" field="manufacturer"/>
        </ItemDetails>
        );
};

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
};

