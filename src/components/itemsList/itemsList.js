import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ItemsList extends Component {
    state = {
        allItems: []
    };

    getData = this.props.getData;

    componentDidMount() {
        this.getData()
            .then((allItems) => this.setState({allItems}));
    };

    buildList(arr) {
        return arr.map(item => {
            const data = this.props.children(item);
            return (
                <ListGroupItem 
                    key={item.id}
                    tag="button"
                    action
                    className="border-warning text-light bg-dark"
                    onClick={() => this.props.onItemClicked(item.id)}>
                    {data}
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