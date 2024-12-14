import log from "../log";

const options: Intl.DateTimeFormatOptions = {
	weekday: "short", // Fri
	month: "2-digit", // 12
	day: "2-digit", // 13
	year: "numeric", // 2024
	hour: "2-digit", // 12
	minute: "2-digit", // 47
	second: "2-digit", // 28
	hour12: true, // AM/PM
};
const locales = "en-US";

const timestamp = new Date().toLocaleString(locales, options); // [Sat, 12/14/2024, 03:21:43 PM]

log(timestamp);

export { timestamp };
