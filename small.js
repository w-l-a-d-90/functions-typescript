const resultingPromises = urls.map((url) => makHttpRequest(url));
const channel = getChannel(computedAppVersion);