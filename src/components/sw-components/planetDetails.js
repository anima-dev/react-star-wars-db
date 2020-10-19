import React from 'react';
import ItemDetails, {Record} from '../itemDetails';
import ErrorBoundry from '../errorBoundry';
import withSwapi from '../HOC-helpers/withSwapi';

const PlanetDetails = ({itemId, swapi}) => {
    const {getPlanet} = swapi;
    return (
        <ErrorBoundry>
            <ItemDetails getItem={getPlanet} itemId={itemId}>
                <Record label="Name" field="name"/>
                <Record label="Length" field="length"/>
                <Record label="Manufacturer" field="manufacturer"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};

export default withSwapi(PlanetDetails);

