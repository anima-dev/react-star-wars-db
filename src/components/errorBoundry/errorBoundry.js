import React, {Component} from 'react';
import ErrorMsg from '../errorMsg';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    };

    componentDidCatch() {
		this.setState({
            error: true
        });
    };
    
    render() {
        if (this.state.error) {
            return (
                <div className="mt-5 p-5 d-flex bg-dark rounded">
                    <ErrorMsg msg={this.props.msg}/>
                </div>
            );
        }
        return this.props.children;
    };
};