const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const channel = getChannel(computedAppVersion);
var regexp  = new RegExp('{{([^}]+)}}', 'g');