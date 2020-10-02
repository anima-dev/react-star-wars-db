import svg from './960b0b807b8d3bab15ebec50b4cefa7e.svg';
export default class SwapiService {
	_apiBase = 'https://swapi.dev/api/';

    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
        throw new Error (`Could not fetch ${url} with status ${res.status}`)
        }

        return await res.json();
    };
    
    async getAllPeople() {
        const res = await this.getData('people');
        return res.results.map((person) => this._transformPerson(person));
    };

    async getPerson(id) {
        const person = await this.getData(`people/${id}/`);
        return this._transformPerson(person);
    };

    async getAllPlanets() {
        const res = await this.getData('planets');
        return res.results;
    };

    async getPlanet(id) {
        const planet = await this.getData(`planets/${id}/`);
        return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getData('starships');
        return res.results;
    };

    async getStarship(id) {
        const starship = await this.getData(`starships/${id}/`);
        return this._transformStarship(starship);
    };

    _getID = (url) => {
        return url.match(/\/(\d+)\/$/)[1];
    };

    async getPlanetImg(id) {  
        let image = `https://starwars-visualguide.com./assets/img/planets/${id}.jpg`;
        const res = await fetch(image);
        if (!res.ok || res.status === '404') {
            image = svg;
        }
        return image;
    }


    _transformPerson = ({name, gender, birth_year: year, eye_color: eyes, url}) => {
        const personId = this._getID(url);
        return {
            id: personId,
            name,
            gender,
            year,
            eyes,
            image: `https://starwars-visualguide.com./assets/img/characters/${personId}.jpg`
        }
    };

    _transformPlanet = async ({name, population, rotation_period: rotation, diameter, url}) => {
        const planetId = this._getID(url);
        let planetImg = '';
        await this.getPlanetImg(planetId).then((img) => planetImg = img);

        return {
            id: planetId,
            name,
            population,
            rotation,
            diameter,
            image: planetImg
        }
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
        }
    };
};

