const weatherForm = document.querySelector(".weather-form")
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const cityInput = weatherForm.querySelector("input")
    if (cityInput.value === "") {
        alert("city name is required!")
        return
    }

    getWeather(cityInput.value)
    cityInput.value = ""
})

const getWeather = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=d5202fad88ea4f8f839192458242703`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.error) {
            alert(data.error.message)
            return
        }

        document.querySelector(".city").textContent = data.location.name
        document.querySelector(".country").textContent = data.location.country
        document.querySelector(".temp").textContent = data.current.temp_c
        document.querySelector(".is-day").textContent = data.current.is_day ? "Yes" : "No"
        document.querySelector(".wind-dir").textContent = data.current.wind_dir
        document.querySelector(".clouds").textContent = data.current.cloud ? "Yes" : "No"
    })
}

