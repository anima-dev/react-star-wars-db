import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorBtn from '../errorBtn';
import PeoplePage from '../peoplePage';
import ErrorMsg from '../errorMsg';
import './app.css';

export default class App extends Component {
    state = {
        randomItem: true,
        error: false
    }

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
        return (
            <div className="bg-secondary main">
                <Row className="w-100"><Col><Header/></Col></Row>
                <Container>
                    <Row><Col>{randomPlanet}</Col></Row>
                    <div className="mt-5">
                        <Button onClick={this.onItemToggle} color="warning">Toggle Random Planet Block</Button>
                        <ErrorBtn/>
                    </div>
                    <PeoplePage />
                    <PeoplePage/>
                    <PeoplePage/>
                </Container>
            </div>
        )
    }
};