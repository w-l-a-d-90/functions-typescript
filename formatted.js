const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const merge = [...new Set(a.concat(b))];
const goToTop = () => window.scrollTo(0, 0);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);