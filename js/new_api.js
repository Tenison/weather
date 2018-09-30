
const api_class = (area, place) =>{
		this.area = area;
		this.place =  place;

		//email: oseiowusu365@******.com //s************
		//get your api key by creating an acount with https://openweathermap.org/
		const request = new XMLHttpRequest();
		const api_string = `http://api.openweathermap.org/data/2.5/forecast?id=${this.area}&APPID=fe7195f139f5057a9002de3b032afef3`;

		request.open('GET', api_string, true);
		request.onload = function(){
		  	// accessing JSON data here
		  	const data = JSON.parse(this.response);

		  	if (request.status >= 200 && request.status < 400){
			 	//console.log(data.list[0].main.temp);
			 	//store data from api callback in variables
			 	let weather =data.list[0].weather[0].description;
				let sealv = data.list[0].main.sea_level;
				//DOM manipulation to display data in the DOM
				document.getElementById(place).innerHTML += weather + "</br>sea lv:" + sealv;
				//ENABLE speech sythesis in the browser
				document.getElementById(place).onmouseover = function (){	
					if (true)
						window.speechSynthesis.speak(new SpeechSynthesisUtterance(`the weather in ${place} is ${weather} and the sea level is ${sealv} feet`)); 
				};
		  	}else{
		  		console.log('error'); 
		  	}
		};
		request.send();
	}
}

const london = api_class(2643743, 'london');
const Massachusetts = api_class(6254926, 'Boston');
