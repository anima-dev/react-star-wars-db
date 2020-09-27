import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ItemDetails = () => {
    return (
        <div className="mt-5 d-flex">
          <div>
            <img src="/" alt="Item" />
          </div>
          <div className='ml-5 w-100'>
            <h3>Heading</h3>
            <ListGroup className="mt-5 strech">
                <ListGroupItem>One</ListGroupItem>
                <ListGroupItem>One</ListGroupItem>
                <ListGroupItem>One</ListGroupItem>
            </ListGroup>
          </div>
        </div>
    );
}

export default ItemDetails;