const cityName = document.getElementById('cityname');
const submit = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');

const tempa = document.getElementById('temp_val');
const tempStatus = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getdeta = async(even) => {
    even.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `please enter the city name!`;
        datahide.classList.add('date_hide');
    }else {
        try {
            let link = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=dec0d7f853911a8b57fe0d7f31c729be`;
            const response = await fetch(link);
            const data = await response.json();
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name},  ${arrdata[0].sys.country}`;
            tempa.innerText = arrdata[0].main.temp;
        
            const tempmood = tempStatus.innerText = arrdata[0].weather[0].main;
            

            if(tempmood == "Clear") {
                tempStatus.innerHTML = "<i class='fa-solid fa-cloud-sun' style='color: #bdc3c7 '></i>";
            } else if (tempmood == "Clouds") {
               tempStatus.innerHTML = "<i class='fa-solid fa-cloud' style='color: #3498db '></i>";
            } else if (tempmood == "Rain") {
                tempStatus.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #2c3e50 '></i>";
             } else if (tempmood == "Sunny") {
                tempStatus.innerHTML = "<i class='fa-solid fa-sun' style='color: #f1c40f '></i>";
             } else {
                tempStatus.innerHTML = "<i class='fa-solid fa-cloud-sun-rain' style='color: #ecf0f1 '></i>";
             }
             datahide.classList.remove('date_hide');
           } 
           catch {
            city_name.innerText = `please enter the city name properly!`;
            datahide.classList.add('date_hide');
           }
           
        }
}
submit.addEventListener('click', getdeta);

