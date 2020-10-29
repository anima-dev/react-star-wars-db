import svgPlanet from './960b0b807b8d3bab15ebec50b4cefa7e.svg';
import svgStarhip from './spaceship-svgrepo-com.svg';
export default class SwapiService {
    _apiBase = 'https://swapi.dev/api/';
    _imgBase = 'https://starwars-visualguide.com./assets/img/';

    getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
        throw new Error (`Could not fetch ${url} with status ${res.status}`)
        }

        return await res.json();
    };
    
    getAllPeople = async () => {
        const res = await this.getData('people');
        return res.results.map((person) => this._transformPerson(person));
    };

    getPerson = async (id) => {
        const person = await this.getData(`people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getData('planets');
        return res.results.map((planet) => this._transformPlanet(planet));
    };

    getPlanet = async (id) => {
        const res = await this.getData(`planets/${id}/`); 
        const planet = this._transformPlanet(res);
        const img = await this.getPlanetImg(planet.id)
        return {...planet, image: img};
    };

    getAllStarships = async () => {
        const res = await this.getData('starships');
        return res.results.map((starship) => this._transformStarship(starship));
    };

    getStarship = async (id) => {
        const res = await this.getData(`starships/${id}/`);
        const starship = this._transformStarship(res);
        const img = await this.getStarshipImg(starship.id)
        return {...starship, image: img};
    };

    _getID = (url) => {
        return url.match(/\/(\d+)\/$/)[1];
    };

    getPlanetImg = async (id) => {  
        let image = `${this._imgBase}planets/${id}.jpg`;
        const res = await fetch(image);
        if (!res.ok || res.status === '404') {
            image = svgPlanet;
        }
        return image;
    };

    getStarshipImg = async (id) => {  
        let image = `${this._imgBase}starships/${id}.jpg`;
        const res = await fetch(image);
        if (!res.ok || res.status === '404') {
            image = svgStarhip;
        }
        return image;
    };


    _transformPerson = ({name, gender, birth_year: year, eye_color: eyes, url}) => {
        const personId = this._getID(url);
        return {
            id: personId,
            name,
            gender,
            year,
            eyes,
            image: `${this._imgBase}characters/${personId}.jpg`
        }
    };

    _transformPlanet = ({name, population, rotation_period: rotation, diameter, url}) => {
        const planetId = this._getID(url);
        
        return {
            id: planetId,
            name,
            population,
            rotation,
            diameter
        };
    };

    _transformStarship = ({
        name,
        model,
        manufacturer,
        cost_in_credits: cost,
        length,
        crew,
        passengers,
        cargo_capacity: capacity,
        url
        }) => {
        return {
            id: this._getID(url),
            name,
            model,
            manufacturer,
            cost,
            length,
            crew,
            passengers,
            capacity
        };
    };
};

