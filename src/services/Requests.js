class Requests {
    constructor() {

        this.baseAddress = 'http://api.openweathermap.org/data/2.5/weather'

        console.log(this.baseAddress);
    }
    async getSearchDetails(city, country, callback) {
        let address = `${this.baseAddress}?q=${city},${country}&appid=3a86be2a437e1740ae3bfb6d9b77c032`

        const response = await fetch(address);
        var data = await response.json();
        
        callback(data);
    }
}

export default Requests;
