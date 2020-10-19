import React from 'react'
import ErrorBoundry from '../errorBoundry';
import withSwapi from '../HOC-helpers/withSwapi';
import ItemDetails, {Record} from '../itemDetails';

const StarshipDetails = ({itemId, swapi}) => {
    const {getStarship} = swapi;
    return (
        <ErrorBoundry>
            <ItemDetails getItem={getStarship} itemId={itemId}>
                <Record label="Name" field="name"/>
                <Record label="Length" field="length"/>
                <Record label="Manufacturer" field="manufacturer"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};

export default withSwapi(StarshipDetails);