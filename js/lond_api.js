class api_class{
	constructor(area, place){
		this.area = area;
		this.place =  place;
		const request = new XMLHttpRequest();

		const api_string = `http://api.openweathermap.org/data/2.5/forecast?id=${this.area}&APPID=fe7195f139f5057a9002de3b032afef3`;

		request.open('GET', api_string, true);
		request.onload = function () {

		  // Begin accessing JSON data here
		  const data = JSON.parse(this.response);

		  if (request.status >= 200 && request.status < 400) {
		      console.log(data.list[0].main.temp);
		      document.getElementById(place).innerHTML += data.list[0].main.temp + "";
		  } else {
		    console.log('error');
		  }
		}

		request.send();
	}


}

const london = new api_class(2643743, '#london');
const Massachusetts = new api_class(6254926, '#Massachusetts');

