const isArray = (arr) => Array.isArray(arr);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;