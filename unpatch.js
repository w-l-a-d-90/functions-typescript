const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const lastElement = arr => arr[arr.length - 1];