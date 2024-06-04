const arrayContains = (arr, element) => arr.includes(element);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const randomBoolean = () => Math.random() >= 0.5;