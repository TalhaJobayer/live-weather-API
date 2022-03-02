
const searchBtn=()=>{
    const API_KEY=`f48eb38caa8fd45dcfa16c8fd69c7dbb`
    const cityName=document.getElementById('searchInput').value;
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
//    console.log(url);
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayData(data))
}
const setAttribute=(id, text )=>{
   document.getElementById(id).innerText=text;
}
const displayData=(temp)=>{
    setAttribute("name",temp.name)
    setAttribute("celsi",temp.main.temp)
    setAttribute("weather",temp.weather[0].main)
console.log(temp);
  const url=`https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
  const icon=document.getElementById('image');
  icon.setAttribute("src",url)
}
