import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class ErrorBtn extends Component {
    state = {
        error: false
    };
    
    onBtnClick = () => {
        this.setState({error: true})
    };

    render() {
        if (this.state.error) {
            console.log('error true')
            this.foo.bar = 7;
        }

        return (
            <Button 
                className='ml-5'
                color="danger"
                onClick={this.onBtnClick}>
                Throw Error
            </Button>
        )
    }
};

