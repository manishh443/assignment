let loc=document.querySelector('#State');
let Search=document.querySelector('.Search');
let FetchTemp=document.querySelector('.FetchTemp');
let CityState=document.querySelector('.CityState');
let FetchWeatherCond=document.querySelector('.FetchWeatherCond');
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind');
let Feels=document.querySelector('.Feels');
let Visi=document.querySelector('.Visi')
Search.addEventListener('click', fetchWeather);

const ApiKey="5f74dab6289fc825dfd3999ea84e2392";

function fetchWeather(){
    const city=loc.value.trim();
if(!city){
    alert("Please Enter Valid City Name");
    return;
}
const ApiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

  fetch(ApiUrl,{
    method:'GET'
  })
  .then(res=>res.json())
   .then((data)=>{
     if(data.cod==="404"){
        alert("City not found.Please enter a valid city name.");
        return;
     }
    console.log(data);
       
    const countryFullName=new Intl.DisplayNames(['en'],{type:'region'}).of(data.sys.country);
    CityState.innerHTML=`${data.name},${countryFullName }`; //state and country name
    FetchTemp.innerHTML=`${data.main.temp}°C`;  //maintemp set hogya
     FetchWeatherCond.innerHTML=`${data.weather[0].main}`;
    humidity.innerHTML=`Humidity: <br> ${data.main.humidity}%`
    wind.innerHTML=`Wind: <br>${data.wind.speed} m/s`
    Feels.innerHTML=`Feels Like: <br>${data.main.feels_like}°C`;
    Visi.innerHTML=`Visibility: <br> ${data.visibility} m`;

})
.catch(err=>console.log(err))
}