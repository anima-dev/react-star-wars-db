import React from 'react';
import ItemDetails, {Record} from '../itemDetails';
import ErrorBoundry from '../errorBoundry';
import { SwapiServiceConsumer } from '../swapiServiceContext';

const PersonDetails = ({itemId}) => {
    return (
        <ErrorBoundry msg={'The person data expired!!!'}>
            <SwapiServiceConsumer>
                {
                    ({getPerson}) => {
                        return (
                            <ItemDetails getItem={getPerson} itemId={itemId}>
                                <Record label="Gender" field="gender"/>
                                <Record label="Date of Birth" field="year"/>
                                <Record label="Eye Color" field="eyes"/>
                            </ItemDetails>
                        );
                    }
                }
            </SwapiServiceConsumer>
        </ ErrorBoundry>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship}) => {
                    return (
                        <ItemDetails getItem={getStarship} itemId={itemId}>
                            <Record label="Name" field="name"/>
                            <Record label="Length" field="length"/>
                            <Record label="Manufacturer" field="manufacturer"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet}) => {
                    return (
                        <ItemDetails getItem={getPlanet} itemId={itemId}>
                            <Record label="Name" field="name"/>
                            <Record label="Length" field="length"/>
                            <Record label="Manufacturer" field="manufacturer"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
        );
};

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
};

