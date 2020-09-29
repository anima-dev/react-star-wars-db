import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ItemsList from '../itemsList';
import ItemDetails from '../itemDetails';
import './app.css';

const App = () => {
    return (
        <div className="bg-secondary main">
            <Row className="w-100"><Col><Header/></Col></Row>
            <Container>
                <Row><Col><RandomItem/></Col></Row>
                <Row>
                    <Col md='6'><ItemsList/></Col>
                    <Col md='6'><ItemDetails/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;