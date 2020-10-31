import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogin}) => {
    if (isLoggedIn) {
        return <Redirect to='/' />
    }

    return (
        <Jumbotron className="mt-5">
            <h1 className="display-3">Hello</h1>
            <p className="lead">Log in to see the secret page.</p>
            <p className="lead">
                <Button 
                    color="primary"
                    onClick={onLogin}>
                    Log In
                </Button>
            </p>
        </Jumbotron>
    );
};

export default LoginPage;
