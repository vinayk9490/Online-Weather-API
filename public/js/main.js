const submitBtn= document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const temp_real_val=document.getElementById('tempreal_val');
const getInfo=async(event)=>{
    event.preventDefault();
    const cityval=cityName.value;
    if(cityval==="")
    {
        city_name.innerText="enter a valid city name";
    }
    else
    {
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=bcea90012a3df29a8c2512db60d4820e`;
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        const res=arrData[0].main.temp;
        temp.innerText=Math.floor(res-273);
        temp_status.innerText=arrData[0].weather[0].main;
        

        const temp_mood=arrData[0].weather[0].main;
        if(temp_mood==="clear")
        {
            temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        else if(temp_mood==="clouds")
        {
            temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
        }
        else if(temp_mood==="rain")
        {
            temp_status.innerHTML="<i class='fas fa-rain' style='color: #a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }










        }
        catch{
            city_name.innerText=`please enter the city name properly`;
        }
    }
}

submitBtn.addEventListener('click',getInfo);