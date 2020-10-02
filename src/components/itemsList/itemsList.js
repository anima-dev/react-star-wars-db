import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SwapiService from '../../services/swapi';

export default class ItemsList extends Component {
    state = {
        allItems: []
    }

    swapi = new SwapiService();

    componentDidMount() {
        this.swapi.getAllPeople()
            .then((allItems) => this.setState({allItems}));
    }

    buildList(arr) {
        return arr.map(({id, name}) => {
            return (
                <ListGroupItem 
                    key={id}
                    tag="button"
                    action
                    className="border-warning text-light bg-dark"
                    onClick={() => this.props.onItemClicked(id)}>
                    {name}
                </ListGroupItem>
            );
        });
    };

    render() {
        const items = this.buildList(this.state.allItems);
        return (
            <div className="bg-dark pr-5 pl-5 pt-3 pb-3 mt-5 rounded">
                <ListGroup flush>
                    {items}
                </ListGroup>
            </div>
        );
    };
}