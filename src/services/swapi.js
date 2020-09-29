export default class SwapiService {
	_apiBase = 'https://swapi.dev/api/';

    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
        throw new Error (`Could not fetch ${url} with status ${res.status}`)
        }

        return await res.json()
    };
    
    async getAllPeople() {
        const res = await this.getData('people');
        return res.results;
    };

    async getPerson(id) {
        const person = await this.getData(`people/${id}`);
        return this._transformPerson(person);
    };

    async getAllPlanets() {
        const res = await this.getData('planets');
        return res.results;
    };

    async getPlanet(id) {
        const planet = await this.getData(`planets/${id}`);
        return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getData('starships');
        return res.results;
    };

    async getStarship(id) {
        const starship = await this.getData(`starships//${id}`);
        return this._transformStarship(starship);
    };

    getID(url) {
        return url.match(/\/(\d+)\/$/)[1];
    };

    _transformPerson({name, gender, birth_year: year, eye_color: eyes, url}) {
        return {
            id: this.getID(url),
            name,
            gender,
            year,
            eyes
        }
    };

    _transformPlanet({name, population, rotation_period: rotation, diameter, url}) {
        return {
            id: this.getID(url),
            name,
            population,
            rotation,
            diameter
        }
    };

    _transformStarship({
        name,
        model,
        manufacturer,
        cost_in_credits: cost,
        length,
        crew,
        passengers,
        cargo_capacity: capacity,
        url
        }) {
        return {
            id: this.getID(url),
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

