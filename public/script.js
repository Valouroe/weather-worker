// const w=document.getElementById("weather-icon");
// var d=document.getElementById("des").innerHTML
// console.log(d);
//     if(d=="Clouds"){
//         w.src="C:\Users\vokey\OneDrive\Documents\weather app\static\clouds.png";
//     }
//     else if(d=="Clear"){
//         w.src="/static/clear.png";
//     }
//     else if(d=="Rain"){
//         w.src="/static/rain.png";
//     }
//     else if(d=="Drizzle"){
//         w.src="/static/drizzle.png";
//     }
//     else if(d=="Mist"){
//         w.src="/static/mist.png";
//     }


async function getWeather() {
    const cityInput = document.getElementById("cityInput").value || "New York";
    const res = await fetch(`/api/weather?city=${cityInput}`);
    const data = await res.json();
  
    const description = data.weather[0].main;
    const details = data.weather[0].description;
    const temp = Math.round(data.main.temp);
    const city = data.name;
  
    document.getElementById("des").textContent = description;
    document.getElementById("description").textContent = details;
    document.getElementById("temp").textContent = `${temp}°C`;
    document.getElementById("city").textContent = city;
  
    const icon = document.getElementById("weather-icon");
  
    switch (description) {
      case "Clouds":
        icon.src = "/clouds.png";
        break;
      case "Clear":
        icon.src = "/clear.png";
        break;
      case "Rain":
        icon.src = "/rain.png";
        break;
      case "Drizzle":
        icon.src = "/drizzle.png";
        break;
      case "Mist":
        icon.src = "/mist.png";
        break;
      default:
        icon.src = "/clouds.png"; // fallback if needed
    }
  }
  