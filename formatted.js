const isArray = (arr) => Array.isArray(arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const toggleBool = () => (bool = !bool);