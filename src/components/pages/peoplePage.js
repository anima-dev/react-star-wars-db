import React from 'react';
import RowComponent from '../rowComponent';
import { PersonDetails, PeopleList } from '../sw-components';
import {withRouter} from 'react-router-dom';

const PeoplePage = ({history, match}) => {

    const {id} = match.params;

    return (
        <RowComponent 
            left={<PeopleList onItemClicked={(id) => history.push(id)} />} 
            right={<PersonDetails itemId={id}/>} />
    );

};

export default withRouter(PeoplePage);

