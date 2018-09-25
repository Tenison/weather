//first test
/*var request = new XMLHttpRequest();
request.open('GET','http://api.openweathermap.org/data/2.5/forecast?id=2306104&APPID=74ab3c87839067b5dc22ae98c874261d', true);
request.onload = function () {

    var data = JSON.parse(request.responseText);
    if (request.status >= 200 && request.status < 400) {
        //console.log(data.list);
        // document.getElementById('ac').innerHTML = data.list[0].main.temp;
        document.getElementById('ac').innerHTML = data.list[0].weather[0].description + "</br>sea lv:" + data.list[0].main.sea_level;
        
    } else{
        console.log('did not work');
        
    }
};

request.send();

//
var request1 = new XMLHttpRequest();
request1.open('GET','http://api.openweathermap.org/data/2.5/forecast?id=1850692&APPID=d24754b8c30e5c609dc65e0c01db6f7d', true);
request1.onload = function () {

    var data = JSON.parse(request1.responseText);
    if (request1.status >= 200 && request1.status < 400) {
        //console.log(data.list);
        // document.getElementById('ac').innerHTML = data.list[0].main.temp;
        document.getElementById('ty').innerHTML = data.list[0].weather[0].description + "</br>sea lv:" + data.list[0].main.sea_level;
        
    } else{
        console.log('did not work');
        
    }
};

request1.send();*/
//

class wapi{
    constructor(city, place){
        this.city = city;
        this.place =  place;

        const request = new XMLHttpRequest();
        const wapi_string =`http://api.openweathermap.org/data/2.5/forecast?id=${this.city}&APPID=d24754b8c30e5c609dc65e0c01db6f7d`;
        request.open('GET', wapi_string, true );
         request.onload = function () {
             //begin JSON Access
           var data = JSON.parse(request.responseText);
            if (request.status >=200 && request.status < 400) {
                var weather =data.list[0].weather[0].description;
                var sealv = data.list[0].main.sea_level;
                
                document.getElementById(place).innerHTML = weather + "</br>sea lv:" + sealv;
                document.getElementById(place).onmouseover = function (){
             
                    var a = true;
                    if (a == true) {
                        window.speechSynthesis.speak(new SpeechSynthesisUtterance(`the weather in ${place} is ${weather} and the sea level is ${sealv} feet`)); 
                    }
             
                    };
                
            }else{
                console.log('no response');
                
            }
       };
       request.send();
      
    }
}

const accra = new wapi(2306104, 'Accra');
const tokyo = new wapi(1850692, 'Tokyo');