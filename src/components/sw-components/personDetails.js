import React from 'react'
import ErrorBoundry from '../errorBoundry';
import withSwapi from '../HOC-helpers/withSwapi';
import ItemDetails, {Record} from '../itemDetails';

const PersonDetails = ({itemId, swapi}) => {
    const {getPerson} = swapi;
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

export default withSwapi(PersonDetails);