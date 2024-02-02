let apik="c0c0658e472b4b1ce66a0b9c8b560cd1";
let url="https://api.openweathermap.org/data/2.5/weather?q=";
let tem=document.querySelector(".temp");
let place=document.querySelector(".place")
let btn=document.querySelector(".submit")
let windspeed=document.querySelector(".wind");
let humidity=document.querySelector(".humidity");
let txtwindspeed=document.querySelector(".value1");
let txthumidity=document.querySelector(".value1");



btn.addEventListener("click",async ()=>{
    let input=document.querySelector("input");
    let inputval=input.value;

    let response= await fetch(url+`${inputval}`+`&appid=${apik}`+"&units=metric");
    console.log(response);
    let data=await response.json();

    console.log(data);
    tem.innerText=data.main["temp"]+"°C";
    place.innerText=inputval.toUpperCase();
    humidity.innerText=data.main["humidity"]+"%";
    windspeed.innerText=data.wind["speed"]+"km/hr";





}
)
