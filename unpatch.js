var arr3 = "jones".split('');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const removeDuplicates = (arr) => [...new Set(arr)];
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const randomBoolean = () => Math.random() >= 0.5;