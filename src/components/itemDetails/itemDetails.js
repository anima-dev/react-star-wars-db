import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ItemDetails = () => {
    return (
      <div className="mt-5 p-5 d-flex bg-dark rounded">
			<div className="item__img">
				<img className="w-100 rounded" src={'/'} alt={'alt'} />
			</div>
			<div className='ml-5 w-100'>
				<h3 className="text-light">Heading</h3>
				<ListGroup flush className="mt-3">
					<ListGroupItem className="bg-dark text-light border-warning">A</ListGroupItem>
					<ListGroupItem className="bg-dark text-light border-warning">R</ListGroupItem>
					<ListGroupItem className="bg-dark text-light border-warning">D</ListGroupItem>
				</ListGroup>
			</div>
		</div>
    );
}

export default ItemDetails;