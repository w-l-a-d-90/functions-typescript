const buildOutputPath = path.join(repositoryRootPath, 'out');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());