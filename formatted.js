console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;