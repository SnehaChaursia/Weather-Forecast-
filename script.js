
    const apikey = "aae2c63f4dcbe6eecc79717bede98f5d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const search = document.querySelector(".searchbox input");
    const searchbtn = document.querySelector(".searchbox button");

    async function checkweather(cityname) {
        try {
            const response = await fetch(apiUrl + cityname + `&appid=${apikey}`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            console.log(data);

            document.querySelector(".cityname").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        } catch (error) {
            console.error(error);
            document.querySelector(".cityname").innerHTML = "Error!";
            document.querySelector(".temp").innerHTML = "N/A";
        }
    }

    searchbtn.addEventListener("click", () => {
        const cityname = search.value.trim();
        if (cityname) {
            checkweather(cityname);
        } else {
            alert("Please enter a city name.");
        }
    });

