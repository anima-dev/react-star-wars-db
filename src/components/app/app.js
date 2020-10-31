import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header';
import RandomItem from '../randomItem';
import ErrorBtn from '../errorBtn';
import ErrorMsg from '../errorMsg';
import './app.css';
import SwapiService from '../../services/swapi';
import { SwapiServiceProvider } from '../swapiServiceContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';
import {
    PeoplePage, 
    PlanetsPage, 
    StarshipsPage,
    LoginPage,
    SecretPage
    } from '../pages';

export default class App extends Component {
    state = {
        randomItem: true,
        error: false,
        isLoggedIn: false
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

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    render() {
        const {randomItem, error, isLoggedIn} = this.state;

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
                        <SwapiServiceProvider value={this.swapi}>
                            <Switch>
                                <Route 
                                path={'/'}
                                render={() => <h2 className="mt-5">Welcome to Star DB</h2>}
                                exact/>
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
                                <Route 
                                path={'/login'} 
                                render={() => (
                                    <LoginPage
                                    onLogin={this.onLogin}
                                    isLoggedIn={isLoggedIn}/>
                                )}/>
                                <Route 
                                    path={'/secret'} 
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn}/>
                                )}/>
                            </Switch>
                        </SwapiServiceProvider>
                        
                    </Container>
               </Router>
            </div>
        )
    }
};