const isWeekday = (date) => date.getDay() % 6 !== 0;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;