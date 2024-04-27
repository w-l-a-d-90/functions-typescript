const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
console.log("1 && 2 = "+(1 && 2));
const merge = Object.assign({}, obj1, obj2);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());