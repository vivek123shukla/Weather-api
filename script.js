let inputpart=document.querySelector('.inputpart');
let search=document.getElementById('searchbtn');
let temprature=document.querySelector('.temprature');
let description=document.querySelector('.description');
let humadity=document.getElementById('humadity');
let wind=document.getElementById('wind');
let imgs=document.getElementById('imgs');

search.addEventListener('click',async()=>{
    let city=inputpart.value;
    let api_key="174b340cabb6acf10c5db2b516b23bde";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let whether_data=await fetch(`${url}`).then(response=>response.json());
    if(whether_data.cod==='404'){
        console.log('error');
        return;
        
    }
     temprature.innerHTML=`${Math.round(whether_data.main.temp-273.15)} °C`;
      description.innerHTML=`${whether_data.weather[0].description}`
    humadity.innerHTML=`${Math.round(whether_data.main.humidity)}`;
    wind.innerHTML=`${Math.round(whether_data.wind.speed)}KM/H`;
    console.log(whether_data);
    

     if(whether_data.weather[0].main==='Haze'){
        console.log('vivek');
        
        imgs.src="https://cdn-icons-png.flaticon.com/256/1779/1779807.png"
     }
     else if(whether_data.weather[0].main==='Mist'){
        imgs.src="https://img.freepik.com/premium-psd/sun-rain-mist-weather-icon-3d-cartoon_621018-34.jpg"     
     }
     else if(whether_data.weather[0].main==='Clouds'){
        imgs.src='https://c8.alamy.com/comp/2DCNBAT/sun-and-cloud-for-cloudy-and-overcast-weather-colorful-icon-symbol-2DCNBAT.jpg';
     }
      else if(whether_data.weather[0].main==='Rain'){
        imgs.src='https://previews.123rf.com/images/maheyfoto/maheyfoto1705/maheyfoto170500077/78848099-weather-symbol-for-coming-sun-after-rainfall-weather-change-from-rain-to-sunshine-weather-report.jpg'
    }else if(whether_data.weather[0].main==='Clear'){
        imgs.src='https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png'
    }
})