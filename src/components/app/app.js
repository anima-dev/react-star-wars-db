import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ItemsList from '../itemsList';
import ItemDetails from '../itemDetails';

const App = () => {
    return (
        <Container>
            <Row><Col><Header/></Col></Row>
            <Row><Col><RandomItem/></Col></Row>
            <Row>
                <Col md='6'><ItemsList/></Col>
                <Col md='6'><ItemDetails/></Col>
            </Row>
        </Container>
    )
}

export default App;