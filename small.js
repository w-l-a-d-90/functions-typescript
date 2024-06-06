const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isArray = (arr) => Array.isArray(arr);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);