import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ItemsList from '../itemsList';
import ItemDetails from '../itemDetails/';
import ErrorMsg from '../errorMsg';

export default class PeoplePage extends Component {
    state = {
        idSelected: 3,
		error: false
    }

    componentDidCatch() {
		this.setState({
            error: true
        });
	}

    onItemClicked = (id) => {
        this.setState({
            idSelected: id
        });
    };

    render() {
        const {idSelected, error} = this.state;

        if (error) {
            return (
                <div className="mt-5 p-5 d-flex bg-dark rounded">
                    <ErrorMsg msg={'All people expired!!!'}/>
                </div>
            );
        }
        return(
            <Row>
                <Col md='6'><ItemsList onItemClicked={this.onItemClicked}/></Col>
                <Col md='6'><ItemDetails itemId={idSelected}/></Col>
            </Row>
        );
    };
}