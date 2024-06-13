const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const executableName = getExecutableName(channel, appName);
const result = await makeHttpRequest(url);