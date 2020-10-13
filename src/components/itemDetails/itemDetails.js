import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../spinner';
import ErrorBtn from '../errorBtn';
import './itemDetails.css';


const Record = ({item, label, field}) => {
	return (
		<ListGroupItem className="bg-dark text-light border-warning">
			{label}: {item[field]}
		</ListGroupItem>
	);
};
export {Record};

export default class ItemDetails extends Component {

	state = {
		item: {},
		loading: true
	};

	componentDidMount() {
		this.updateItem();
	};

	componentDidUpdate(prevProps) {
		if (prevProps.itemId !== this.props.itemId) {
			this.updateItem();
		}
	};

	updateItem() {
		const {itemId, getItem} = this.props;

		if (!itemId) {
			return;
		}

		getItem(itemId)
			.then((item) => {this.setState({
					item,
					loading: false
				});
			});
	};

    render() {
		const {item, loading} = this.state;
		const {name, image} = item;

		if (!item) {
			return <span>Select item</span>;
		}
	
		const itemCard = (
			<>
				<div className="item__img">
					<img className="w-100 rounded" src={image} alt={name} />
				</div>
				<div className='ml-5 w-100'>
					<h3 className="text-light">{name}</h3>
					<ListGroup flush className="mt-3">
						{React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, {item});
						})}
					</ListGroup>
					<ErrorBtn className="mt-3"/>
				</div>
			</>
		);
		
		return (
			<div className="mt-5 p-5 d-flex bg-dark rounded">
				  {loading ? <Spinner/> : itemCard}
			  </div>
		);
	};
};