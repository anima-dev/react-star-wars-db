import React, {Component} from 'react';
import RowComponent from '../rowComponent';
import { PersonDetails, PeopleList } from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        idSelected: 3,
    };


    onItemClicked = (id) => {
        this.setState({
            idSelected: id
        });
    };

    render() {
        const {idSelected} = this.state;

        return (
            <RowComponent 
                left={<PeopleList onItemClicked={this.onItemClicked} />} 
                right={<PersonDetails itemId={idSelected}/>} />
        );
    };
};