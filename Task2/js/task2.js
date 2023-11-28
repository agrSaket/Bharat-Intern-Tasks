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

    let explanation;

    // Generate explanation based on the conversion result
    explanation = generateExplanation(fromUnit, toUnit, temperature, result);

    // Display the explanation in the explanation section
    document.getElementById('explanationText').innerText = explanation;

    // Show the explanation section
    document.getElementById('explanationSection').style.display = 'block';
}

function swapUnits() {
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;

    // Swap the values
    document.getElementById('fromUnit').value = toUnit;
    document.getElementById('toUnit').value = fromUnit;
}

function generateExplanation(fromUnit, toUnit, temperature, result) {
    let formula;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            return `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = (T(°${fromUnit[0].toUpperCase()}) * 9 / 5) + 32 \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = (${temperature} * 9 / 5) + 32 \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}`;
        } else if (toUnit === 'kelvin') {
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = T(°${fromUnit[0].toUpperCase()}) + 273.15 \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = ${temperature}  + 273.15 \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        } else {
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = T(°${fromUnit[0].toUpperCase()}) \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = ${temperature} \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            // formula = (temperature - 32) * (5 / 9);
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = (T(°${fromUnit[0].toUpperCase()}) - 32) * (5 / 9) \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = (${temperature} - 32) * (5 / 9) \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        } else if (toUnit === 'kelvin') {
            // formula = (temperature - 32) * (5 / 9) + 273.15;
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = (T(°${fromUnit[0].toUpperCase()}) - 32) * (5 / 9) + 273.15 \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = (${temperature} - 32) * (5 / 9) + 273.15 \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        } else {
            // formula = temperature;
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = T(°${fromUnit[0].toUpperCase()}) \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = ${temperature} \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            // formula = temperature - 273.15;
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = T(°${fromUnit[0].toUpperCase()}) - 273.15 \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = ${temperature} - 273.15 \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        } else if (toUnit === 'fahrenheit') {
            // formula = (temperature - 273.15) * 9 / 5 + 32;
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = (T(°${fromUnit[0].toUpperCase()}) - 273.15) * (9 / 5) + 32 \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = (${temperature} - 273.15) * (9 / 5) + 32 \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        } else {
            // formula = temperature;
            return  `Formula : \n\n T(°${toUnit[0].toUpperCase()}) = T(°${fromUnit[0].toUpperCase()}) \n\n 
            Putting T(°${fromUnit[0].toUpperCase()}) = ${temperature}°${fromUnit[0].toUpperCase()} \n
            T(°${toUnit[0].toUpperCase()}) = ${temperature} \n
            T(°${toUnit[0].toUpperCase()}) = ${result.toFixed(2)}°${toUnit[0].toUpperCase()}
            `;
        }
    }
    return 
    `
    Formula : ${formula}
    Explanation: ${temperature}°${fromUnit[0].toUpperCase()} is converted to ${result.toFixed(2)}°${toUnit[0].toUpperCase()} because... (add your explanation here).`;
}