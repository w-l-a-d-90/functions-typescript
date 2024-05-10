console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const merge = (a, b) => [...a, ...b];
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;