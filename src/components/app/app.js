import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorBtn from '../errorBtn';
import ErrorMsg from '../errorMsg';
import RowComponent from '../rowComponent'
import './app.css';
import SwapiService from '../../services/swapi';
import ItemDetails, {Record} from '../itemDetails';
import PeoplePage from '../peoplePage/peoplePage';

export default class App extends Component {
    state = {
        randomItem: true,
        error: false
    }

    swapi = new SwapiService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemToggle = () => {
        this.setState(({randomItem}) => {
            return {
                randomItem: !randomItem
            };
        });
    };

    render() {
        const {randomItem, error} = this.state;

        if (error) {
            return (
                <div className="bg-secondary main d-flex justify-content-center align-items-center">
                    <ErrorMsg msg={'Smth went so wrong =('}/>
                </div>
            );
        }

        const randomPlanet = randomItem ? <RandomItem/> : null;

        const personDetails = (
            <ItemDetails getItem={this.swapi.getPerson} itemId={5}>
                <Record label="Gender" field="gender"/>
                <Record label="Date of Birth" field="year"/>
                <Record label="Eye Color" field="eyes"/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails getItem={this.swapi.getStarship} itemId={21}>
                <Record label="Name" field="name"/>
                <Record label="Length" field="length"/>
                <Record label="Manufacturer" field="manufacturer"/>
            </ItemDetails>
        );

        return (
            <div className="bg-secondary main">
                <Row className="w-100"><Col><Header/></Col></Row>
                <Container>
                    <RowComponent left={personDetails} right={starshipDetails}/>
                    <Row><Col>{randomPlanet}</Col></Row>
                    <div className="mt-5">
                        <Button onClick={this.onItemToggle} color="warning">Toggle Random Planet Block</Button>
                        <ErrorBtn/>
                    </div>
                    <PeoplePage />
                </Container>
            </div>
        )
    }
};