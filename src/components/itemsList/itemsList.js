import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ErrorBtn from '../errorBtn';

const ItemsList = (props) => {

    const {data, onItemClicked, children: renderLabel} = props;
    
    const items = data.map(item => {
            const label = renderLabel(item);
            const {id} = item;
            console.log(item);
            return (
                <ListGroupItem 
                    key={id}
                    tag="button"
                    action
                    className="border-warning text-light bg-dark"
                    onClick={() => onItemClicked(id)}>
                    {label}
                </ListGroupItem>
            );
        });
 
        return (
            <div className="bg-dark pr-5 pl-5 pt-3 pb-3 mt-5 rounded">
                <ListGroup flush>
                    {items}
                </ListGroup>

                <ErrorBtn />

            </div>
        );
};

export default ItemsList;