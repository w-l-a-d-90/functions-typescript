console.log("1 || 2 = "+(1 || 2));
console.log(false === '0');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());