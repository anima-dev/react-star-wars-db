import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ItemsList = () => {
    return (
        <div className="bg-dark pr-5 pl-5 pt-3 pb-3 mt-5 rounded">
            <ListGroup flush>
                <ListGroupItem className="border-warning text-light bg-dark">One</ListGroupItem>
                <ListGroupItem className="border-warning text-light bg-dark">One</ListGroupItem>
                <ListGroupItem className="border-warning text-light bg-dark">One</ListGroupItem>
                <ListGroupItem className="border-warning text-light bg-dark">One</ListGroupItem>
                <ListGroupItem className="border-warning text-light bg-dark">One</ListGroupItem>
                <ListGroupItem className="border-warning text-light bg-dark">One</ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default ItemsList;