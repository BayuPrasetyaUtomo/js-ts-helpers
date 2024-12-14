import { inspect } from "node:util";
import { timestamp } from "../time";

const style = {
	color: {
		red: "\x1b[38;2;248;113;113m",
		green: "\x1b[38;2;74;222;128m",
		blue: "\x1b[38;2;34;211;238m",
		orange: "\x1b[38;2;251;146;60m",
	},
	weight: {
		bold: "\x1b[1m",
	},
	reset: "\x1b[0m",
};

const logType = {
	INFO: `${style.color.blue + style.weight.bold}%s${style.reset}`,
	ERROR: `${style.color.red + style.weight.bold}%s${style.reset}`,
	WARN: `${style.color.orange + style.weight.bold}%s${style.reset}`,
	SUCCESS: `${style.color.green + style.weight.bold}%s${style.reset}`,
} as const;

type LogType = keyof typeof logType;

const log = (data: unknown, type: LogType = "INFO") => {
	const formattedData = typeof data === "object" ? `\n${inspect(data)}` : data;

	console.log(logType[type], `[${timestamp}]\n[${type}] ${formattedData}`);
};

export default log;
