function convertTemperature() {
  let value = parseFloat(document.getElementById("inputValue").value);
  let from = document.getElementById("fromScale").value;
  let to = document.getElementById("toScale").value;
  let result = value;

  if (isNaN(value)) {
    document.getElementById("result").innerText = "⚠️ Please enter a valid number!";
    return;
  }

  if (from === "Celsius" && to === "Fahrenheit") {
    result = (value * 9/5) + 32;
  } else if (from === "Fahrenheit" && to === "Celsius") {
    result = (value - 32) * 5/9;
  } else if (from === "Celsius" && to === "Kelvin") {
    result = value + 273.15;
  } else if (from === "Kelvin" && to === "Celsius") {
    result = value - 273.15;
  } else if (from === "Fahrenheit" && to === "Kelvin") {
    result = (value - 32) * 5/9 + 273.15;
  } else if (from === "Kelvin" && to === "Fahrenheit") {
    result = (value - 273.15) * 9/5 + 32;
  }

  document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${to}`;
}
