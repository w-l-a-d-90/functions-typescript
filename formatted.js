const results = await Promise.all(resultingPromises);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const toggleBool = () => (bool = !bool);