

const cityName=document.getElementById("cityName")
const submitBtn=document.getElementById("submitBtn")
const city_name=document.getElementById("city_name")
const temp_real=document.getElementById("temp_real")
const temp_status=document.getElementById("temp_status")

const datahide=document.querySelector(".middle_layer")

const getInfo = async (event)=>{
   event.preventDefault();
   let cityVal=cityName.value;

   if(cityVal === ""){
    city_name.innerText=`Plz write name of city before search`;
    datahide.classList.add('data_hide');
   }else{
    
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=7ed0c84ec5e0a197e4d1459cb2e34d00`
    const response=await fetch(url);
    const data = await response.json();
    const arrData=[data];
    
    city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
    temp_real.innerText=Math.floor((arrData[0].main.temp) / 10);
    // temp_status.innerText=arrData[0].weather[0].main;

    const tempMood=arrData[0].weather[0].main;

    if(tempMood == "Sunny"){
        temp_status.innerHTML =
        " <i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
    } else if(tempMood == "Clouds"){
        temp_status.innerHTML =
        " <i class='fa-solid fa-cloud' style='color: #dfe4ea;'></i>"
    }else if(tempMood == "Rainy"){
        temp_status.innerHTML =
        " <i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>"
    }else{
        temp_status.innerHTML =
        " <i class='fa-solid fa-cloud' style='color: #dfe4ea;'></i>"
    }

    datahide.classList.remove('data_hide');
    }
    catch{
        city_name.innerText=`Plz enter city name properly`;
        datahide.classList.add('data_hide');
    }
   }

}

submitBtn.addEventListener("click",getInfo)