import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SwapiService from '../../services/swapi';
import Spinner from '../spinner';

export default class ItemDetails extends Component {
	state = {
		selectedItem: null,
		loading: true
	}

	swapi = new SwapiService();

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.itemId !== this.props.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const {itemId} = this.props;
		if (!itemId) {
			return;
		}

		this.swapi.getPerson(itemId)
			.then((person) => {this.setState({
					selectedItem: person,
					loading: false
				});
			})
	}

    render() {
		const {selectedItem, loading} = this.state;
		const content = loading ? <Spinner/> : <CharDetails char={selectedItem}/>;

		if (!selectedItem) {
			return <span>Select person</span>;
		}
		
		return (
			<div className="mt-5 p-5 d-flex bg-dark rounded">
				  {content}
			  </div>
		);
	};
};

const CharDetails = ({char}) => {
	const {name, image, gender, year, eyes} = char;
	return (
		<>
		<div className="item__img">
			<img className="w-100 rounded" src={image} alt={name} />
		</div>
		<div className='ml-5 w-100'>
			<h3 className="text-light">{name}</h3>
			<ListGroup flush className="mt-3">
				<ListGroupItem className="bg-dark text-light border-warning">Gender: {gender}</ListGroupItem>
				<ListGroupItem className="bg-dark text-light border-warning">Birth: {year}</ListGroupItem>
				<ListGroupItem className="bg-dark text-light border-warning">Eyes: {eyes}</ListGroupItem>
			</ListGroup>
		</div>
		</>
	)
};