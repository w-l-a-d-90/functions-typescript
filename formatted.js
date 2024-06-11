var arr3 = "jones".split('');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());