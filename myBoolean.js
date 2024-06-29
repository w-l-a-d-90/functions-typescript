const removeDuplicates = (arr) => [...new Set(arr)];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const resultingPromises = urls.map((url) => makHttpRequest(url));