const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();