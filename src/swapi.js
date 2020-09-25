export default class SwapiService {
	_apiBase = 'https://swapi.dev/api/';

    async getData(url) {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error (`Could not fetch ${url} with status ${res.status}`)
      }

      return await res.json()
    }
    
    getPeople() {
        return this.getData('people');
    }

    getPerson(id) {
        return this.getData(`people/${id}`);
    }

    getPlanets() {
        return this.getData('planets');
    }

    getStarships() {
        return this.getData('starships');
    }
}

