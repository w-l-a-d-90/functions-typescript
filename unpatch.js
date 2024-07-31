const randomString = () => Math.random().toString(36).slice(2);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const arrayContains = (arr, element) => arr.includes(element);