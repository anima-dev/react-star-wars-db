import React from 'react';
import { StarshipsList } from '../sw-components';
import {withRouter} from 'react-router-dom';

const StarshipsPage = ({history}) => {

    const onItemClicked = (id) => {
        history.push(id);
    };

    return (
        <StarshipsList onItemClicked={onItemClicked} />
    );
};

export default withRouter(StarshipsPage);