const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const arrayContains = (arr, element) => arr.includes(element);