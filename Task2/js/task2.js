function convert() {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let temperature = parseFloat(document.getElementById('temperature').value);

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature.');
        return;
    }

    let result;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (temperature * 9 / 5) + 32;
        } else if (toUnit === 'kelvin') {
            result = temperature + 273.15;
        } else {
            result = temperature;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (temperature - 32) * (5 / 9);
        } else if (toUnit === 'kelvin') {
            result = (temperature - 32) * (5 / 9) + 273.15;
        } else {
            result = temperature;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (temperature - 273.15) * 9 / 5 + 32;
        } else {
            result = temperature;
        }
    }

    document.getElementById('result').innerText = `Result:   ${temperature}°${fromUnit[0].toUpperCase()} is ${result.toFixed(2)}°${toUnit[0].toUpperCase()}.`;
}

function swapUnits() {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;

    // Swap the values
    document.getElementById('fromUnit').value = toUnit;
    document.getElementById('toUnit').value = fromUnit;
}