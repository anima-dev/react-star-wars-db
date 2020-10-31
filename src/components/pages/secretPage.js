import React from 'react';
import {Jumbotron} from 'reactstrap';
import {Redirect} from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {

    if (isLoggedIn) {
        return (
            <Jumbotron>
                <h1 className="display-3">Oh, hi!</h1>
                <p className="lead">This is a very very very secret page.</p>
                <hr className="my-2" />
                <p>You see it as you're logged in.</p>
                <p className="lead">
                </p>
            </Jumbotron>
        );
    }

    return <Redirect to='/login'/>;


};

export default SecretPage;