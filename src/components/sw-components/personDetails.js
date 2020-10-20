import React from 'react'
import ErrorBoundry from '../errorBoundry';
import withSwapi from '../HOC-helpers/withSwapi';
import ItemDetails, {Record} from '../itemDetails';

const PersonDetails = (props) => {
    return (
        <ErrorBoundry msg={'The person data expired!!!'}>
            <ItemDetails {...props}>
                <Record label="Gender" field="gender"/>
                <Record label="Date of Birth" field="year"/>
                <Record label="Eye Color" field="eyes"/>
            </ItemDetails>
        </ ErrorBoundry>
    );
};

const mapMethodsToProps = ({getPerson}) => {
    return {
        getItem: getPerson
    };
}

export default withSwapi(PersonDetails, mapMethodsToProps);