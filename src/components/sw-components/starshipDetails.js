import React from 'react'
import ErrorBoundry from '../errorBoundry';
import withSwapi from '../HOC-helpers/withSwapi';
import ItemDetails, {Record} from '../itemDetails';

const StarshipDetails = (props) => {
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

const mapMethodsToProps = ({getStarship}) => {
    return {
        getItem: getStarship
    };
};

export default withSwapi(StarshipDetails, mapMethodsToProps);