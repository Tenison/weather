class api_class{
	constructor(area, place){
		this.area = area;
		this.place =  place;

		//email: oseiowusu365@******.com //s************
		//get your api key by creating an acount with https://openweathermap.org/
		const request = new XMLHttpRequest();
		const api_string = `http://api.openweathermap.org/data/2.5/forecast?id=${this.area}&APPID=fe7195f139f5057a9002de3b032afef3`;

		request.open('GET', api_string, true);
		request.onload = function () {

		  // accessing JSON data here
		  const data = JSON.parse(this.response);

		  if (request.status >= 200 && request.status < 400) {
		 	//console.log(data.list[0].main.temp);
		   	document.getElementById(place).innerHTML += data.list[0].weather[0].description + "</br>sea lv:" + data.list[0].main.sea_level;
		  } else {
		    console.log('error');
		  }
		}

		request.send();
	}


}

const london = new api_class(2643743, 'london');
const Massachusetts = new api_class(6254926, 'Massachusetts');

