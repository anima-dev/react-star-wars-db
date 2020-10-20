import React from 'react';
import ItemDetails, {Record} from '../itemDetails';
import ErrorBoundry from '../errorBoundry';
import withSwapi from '../HOC-helpers/withSwapi';

const PlanetDetails = (props) => {
    return (
        <ErrorBoundry>
            <ItemDetails {...props}>
                <Record label="Name" field="name"/>
                <Record label="Length" field="length"/>
                <Record label="Manufacturer" field="manufacturer"/>
            </ItemDetails>
        </ErrorBoundry>
    );
};

const mapMethodsToProps = ({getPlanet}) => {
    return {
        getItem: getPlanet
    };
};

export default withSwapi(PlanetDetails, mapMethodsToProps);

