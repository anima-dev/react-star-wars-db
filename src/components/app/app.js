import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ItemsList from '../itemsList';
import ItemDetails from '../itemDetails';
import './app.css';

export default class App extends Component {
    state = {
        randomItem: true,
        idSelected: 1
    }

    onItemToggle = () => {
        this.setState(({randomItem}) => {
            return {
                randomItem: !randomItem
            };
        });
    };

    onItemClicked = (id) => {
        this.setState({
            idSelected: id
        });
    };

    render() {
        const {randomItem, idSelected} = this.state;
        const randomPlanet = randomItem ? <RandomItem/> : null;
        return (
            <div className="bg-secondary main">
                <Row className="w-100"><Col><Header/></Col></Row>
                <Container>
                    <Row><Col>{randomPlanet}</Col></Row>
                    <Button onClick={this.onItemToggle} className="mt-5" color="warning">Toggle Random Planet Block</Button>
                    <Row>
                        <Col md='6'><ItemsList onItemClicked={this.onItemClicked}/></Col>
                        <Col md='6'><ItemDetails itemId={idSelected}/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
};