let allInputs = document.querySelectorAll("input");
let arr = Array.from(allInputs);

let celciusToOtherTemperature = (celsius) => {
  celsius = Number(celsius);
  let kelvin = celsius + 273.15; // Celsius to Kelvin conversion formula
  let fahrenheit = celsius * (9 / 5) + 32; // Celsius to Fahrenheit conversion formula
  return [celsius, fahrenheit, kelvin];
};

let fahrenheitToOtherTemperature = (fahrenheit) => {
  fahrenheit = Number(fahrenheit);
  let celsius = ((fahrenheit - 32) * 5) / 9; // Fahrenheit to Celsius conversion formula
  let kelvin = celsius + 273.15; // Celsius to Kelvin conversion formula

  return [celsius, fahrenheit, kelvin];
};

let kelvinToOtherTemperature = (kelvin) => {
  kelvin = Number(kelvin);
  let celsius = kelvin - 273.15; // Kelvin to Celsius conversion formula
  let fahrenheit = (celsius * 9) / 5 + 32; // Celsius to Fahrenheit conversion formula

  return [celsius, fahrenheit, kelvin];
};

allInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    let inputSelected = e.target.id;
    let temperature = e.target.value;
    let allTemperatures;
    // If the Input box Selected is Celcius
    if (inputSelected === "celsius") {
      allTemperatures = celciusToOtherTemperature(temperature);
    }

    // If the Input box Selected is Fahrenheit
    else if (inputSelected === "fahrenheit") {
      allTemperatures = fahrenheitToOtherTemperature(temperature);
    }

    // If the Input box Selected is Kelvin
    else {
      allTemperatures = kelvinToOtherTemperature(temperature);
    }
    console.log(allTemperatures);

    allInputs.forEach((element, index) => {
      allInputs[index].value = allTemperatures[index].toFixed(2);
    });
  });
});