import React, {Component} from 'react';
import RowComponent from '../rowComponent';
import ItemsList from '../itemsList';
import ItemDetails, {Record} from '../itemDetails/';
import ErrorBoundry from '../errorBoundry';
import SwapiService from '../../services/swapi';

export default class PeoplePage extends Component {
    state = {
        idSelected: 3,
    };

    swapi = new SwapiService();

    onItemClicked = (id) => {
        this.setState({
            idSelected: id
        });
    };

    render() {
        const {idSelected} = this.state;

        const peopleList = (
            <ItemsList  
                onItemClicked={this.onItemClicked}>
                    {(i) => `${i.name} (${i.year})`}
            </ItemsList>
            );
        
        const personDetails = (
            <ErrorBoundry msg={'The person data expired!!!'}>
                <ItemDetails getItem={this.swapi.getPerson} itemId={idSelected}>
                    <Record label="Gender" field="gender"/>
                    <Record label="Date of Birth" field="year"/>
                    <Record label="Eye Color" field="eyes"/>
                </ItemDetails>
            </ErrorBoundry>
        );

        return (
            <RowComponent left={peopleList} right={personDetails}/>
        );
    };
};