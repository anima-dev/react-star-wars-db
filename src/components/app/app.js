import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorBtn from '../errorBtn';
import ErrorMsg from '../errorMsg';
import './app.css';
import SwapiService from '../../services/swapi';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import { SwapiServiceProvider } from '../swapiServiceContext';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

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


        return (
            <div className="bg-secondary main">
               <Router>
                    <Row className="w-100"><Col><Header/></Col></Row>
                    <Container>
                        <Row><Col>{randomPlanet}</Col></Row>
                        <div className="mt-5">
                            <Button onClick={this.onItemToggle} color="warning">Toggle Random Planet Block</Button>
                            <ErrorBtn/>
                        </div>
                        <Route 
                            path={'/'}
                            render={() => <h2 className="mt-5">Welcome to Star DB</h2>}
                            exact/>
                        <SwapiServiceProvider value={this.swapi}>
                            <Route 
                            path={'/people/:id?'} 
                            component={PeoplePage} />
                            <Route 
                            path={'/planets'} 
                            component={PlanetsPage} />
                            <Route 
                            path={'/starships'} 
                            component={StarshipsPage} 
                            exact/>
                            <Route 
                                path={'/starships/:id'}
                                render={({match}) => {
                                    return <StarshipDetails itemId={match.params.id}/>
                                }}/>
                        </SwapiServiceProvider>
                    </Container>
               </Router>
            </div>
        )
    }
};