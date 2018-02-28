
console.log("i feel warm");

let input = document.getElementById("yourinput");
let cel = document.getElementById("Celcius");
let fahrenheit = document.getElementById("Fahrenheit");
let convert = document.getElementById("convert");
let rmvBtn = document.getElementById("clear");
let txtArea = document.getElementById("output");

input.addEventListener("keypress", function (event) {
    if (event.this === 13 && cel.checked === true) {
        event.preventDefault();
        toCelsius();

    } else if (event.this === 13 && fahrenheit.checked === true) {
        event.preventDefault();
        toFahrenheit();
    }
});

convert.addEventListener("click", function (event) {
    if (cel.checked === true) {
        event.preventDefault();
        toCelsius();
    } else if (fahrenheit.checked === true) {
        event.preventDefault();
        toFahrenheit();
    }
});

rmvBtn.addEventListener("click", function (event) {
    txtArea.style.display = "none";
})

function toCelsius() {
    var celcOutPUt = (input.value - 32) * 5 / 9;
    txtArea.innerHTML = `<p>Celcius Temperature = </p><h1>${celcOutPUt}</h1>`;
}

function toFahrenheit() {
    var fahrOutPut = input.value * 1.8 + 32;
    txtArea.innerHTML = `<p>Fahrenheit Temperature = </p><h1>${fahrOutPut}</h1>`;
}

var button = document.getElementById("converter");
function determineConverter(clickEvent) {
}
