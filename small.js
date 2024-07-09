const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());