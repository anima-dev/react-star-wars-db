import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import SwapiService from '../../services/swapi';
import './randomItem.css';
import Spinner from '../spinner/';
import Error from '../error';

export default class RandomItem extends Component {
	state = {
		planet: {},
		loading: true,
		error: false
	};

	constructor() {
		super();
		this.updatePlanet();
	};

	swapi = new SwapiService();

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updatePlanet() {
		const id = Math.floor(Math.random()*1025+2);
		this.swapi.getPlanet(id)
			.then((planet) => {
				this.setState({
					planet,
					loading: false
				});
			})
			.catch(this.onError)
	};

	render() {
		const {planet, loading, error} = this.state;
		const errorMsg = error ?  <Error msg={"Looks like the planet is not found"}/> : null;
		const spinner = !error && loading ? <Spinner/> : null;
		const content = !error && !loading ? <Planet planet={planet} /> : null;


		return (
			<div className="mt-5 p-5 d-flex bg-dark rounded">
				{spinner}
				{content}
				{errorMsg}
			</div>
		)
	};
};

const Planet = ({planet}) => {
	const {id, name, population, rotation, diameter} = planet;
	const img = `https://starwars-visualguide.com./assets/img/planets/${id}.jpg`;

	return  (
		<>
			<div className="randomItem__img">
				<img className="w-100 rounded" src={img} alt={name} />
			</div>
			<div className='ml-5 w-100'>
				<h3 className="text-light">{name}</h3>
				<ListGroup flush className="mt-3">
					<ListGroupItem className="bg-dark text-light border-warning">Population: {population}</ListGroupItem>
					<ListGroupItem className="bg-dark text-light border-warning">Rotation Period: {rotation}</ListGroupItem>
					<ListGroupItem className="bg-dark text-light border-warning">Diameter: {diameter}</ListGroupItem>
				</ListGroup>
			</div>
		</>
	);
}