function control(){
    let startingScale = document.getElementById("scale").value;
    if(startingScale === 'Fahrentheit'){
        fahrenheitConverter();
    } else if(startingScale === 'Celsius'){
        celsiusConverter();

    }
}
function celsiusConverter(){
    let tempToConvert = parseInt(document.getElementById("textBox").value);
    let convertToFahrenheit = (tempToConvert * 9/5) + 32;
    let convertToCelsius = (tempToConvert - 32) * 5/9;
    document.getElementById("fahrenheit").innerHTML = convertToFahrenheit;
    document.getElementById("temp").innerHTML = convertToCelsius;
}
function fahrenheitConverter(){
     let tempToConvert = parseInt(document.getElementById("textBox").value);
     let convertToCelsius = (tempToConvert - 32) * 5/9;
     let convertToFahrenheit = (tempToConvert * 9/5) + 32;
   document.getElementById("temp").innerHTML = convertToCelsius;
   document.getElementById("fahrenheit").innerHTML = convertToFahrenheit;
}


//function fahrenheitConverter(){
 //   let tempToConvert = parseInt(document.getElementById("textBox").value);
 //  let convertToCelsius = (tempToConvert - 32) * 5/9;
 //  document.getElementById("temp").innerHTML = convertToCelsius;