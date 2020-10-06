import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ItemsList from '../itemsList';
import ItemDetails from '../itemDetails/';
import ErrorBoundry from '../errorBoundry';
import SwapiService from '../../services/swapi';

export default class PeoplePage extends Component {
    state = {
        idSelected: 3,
    }

    swapi = new SwapiService();

    onItemClicked = (id) => {
        this.setState({
            idSelected: id
        });
    };

    render() {
        const {idSelected} = this.state;

        return(
            <Row>
                <Col md='6'>
                    <ItemsList 
                    getData={this.swapi.getAllPeople}  
                    onItemClicked={this.onItemClicked}>
                        {(i) => `${i.name}: (${i.gender}, ${i.year})`}
                    </ItemsList>
                </Col>
                <Col md='6'>
                    <ErrorBoundry msg={'The person data expired!!!'}>
                        <ItemDetails itemId={idSelected}/>
                    </ErrorBoundry>
                </Col>
            </Row>       
        );
    };
}