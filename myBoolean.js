const executableName = getExecutableName(channel, appName);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const updated = numbers.filter(element => element > 6);