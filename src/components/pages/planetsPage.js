import React, {Component} from 'react';
import RowComponent from '../rowComponent';
import { PlanetDetails, PlanetsList } from '../sw-components';

export default class PlanetsPage extends Component {
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
                left={<PlanetsList onItemClicked={this.onItemClicked} />} 
                right={<PlanetDetails itemId={idSelected}/>} />
        );
    };
};