const merge = [...new Set(a.concat(b))];
const isWeekday = (date) => date.getDay() % 6 !== 0;