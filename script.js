function control(){
    let startingScale = document.getElementById("scale").value;
    if(startingScale === 'Fahrenheit'){
        fahrenheitFunction();
    } 
    else if(startingScale === 'Celsius'){
        celsiusFunction();

    }
    else if (startingScale === 'Kelvin'){
        kelvinFunction();
    }
    else if (startingScale === 'Rankine'){
        rankineFunction();

    }
}

  // this is celsius to other stuff
function celsiusFunction(){
    let tempToConvert = parseInt(document.getElementById("textBox").value);
    let convertToFahrenheit = (tempToConvert * 9/5) + 32;
    let convertToCelsius = tempToConvert;
    let convertToKelvin = tempToConvert + 273.15 ;
    let convertToRankine = tempToConvert * 9/5 + 491.67;
    document.getElementById("fahrenheit").innerHTML = convertToFahrenheit;
    document.getElementById("temp").innerHTML = convertToCelsius;
    document.getElementById("to-kelvin").innerHTML = convertToKelvin;
    document.getElementById("to-rankine").innerHTML = convertToRankine;

}
// this it fahrenheit to other stuff
function fahrenheitFunction(){
     let tempToConvert = parseInt(document.getElementById("textBox").value);
     let convertToCelsius = (tempToConvert - 32) * 5/9;
     let convertToFahrenheit = tempToConvert;
     let convertToKelvin = (tempToConvert - 32) * 5/9 + 273.15;
     let convertToRankine = tempToConvert + 459.67;
   document.getElementById("temp").innerHTML = convertToCelsius;
   document.getElementById("fahrenheit").innerHTML = convertToFahrenheit;
   document.getElementById("to-kelvin").innerHTML = convertToKelvin;
   document.getElementById("to-rankine").innerHTML = convertToRankine;
}
// this is kelvin to other stuff
function kelvinFunction(){
    let tempToConvert = parseInt(document.getElementById("textBox").value);
    let convertToCelsius = tempToConvert - 273.15;
    let convertToFahrenheit = (tempToConvert - 273.15) * 9/5 + 32;
    let convertToKelvin = tempToConvert;
    let convertToRankine = tempToConvert * 1.8;
  document.getElementById("temp").innerHTML = convertToCelsius;
  document.getElementById("fahrenheit").innerHTML = convertToFahrenheit;
  document.getElementById("to-kelvin").innerHTML = convertToKelvin;
  document.getElementById("to-rankine").innerHTML = convertToRankine;
}
// this is rankine to other stuff
function rankineFunction(){
    let tempToConvert = parseInt(document.getElementById("textBox").value);
    let convertToCelsius = (tempToConvert - 491.67) * 5/9;
    let convertToFahrenheit = tempToConvert - 459.67;
    let convertToKelvin = tempToConvert * 5/9;
    let convertToRankine = tempToConvert;
  document.getElementById("temp").innerHTML = convertToCelsius;
  document.getElementById("fahrenheit").innerHTML = convertToFahrenheit;
  document.getElementById("to-kelvin").innerHTML = convertToKelvin;
  document.getElementById("to-rankine").innerHTML = convertToRankine;
}