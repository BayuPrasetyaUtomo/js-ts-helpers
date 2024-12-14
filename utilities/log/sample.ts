import type { InspectOptions } from "node:util";
import { timestamp } from "../time";

const otions: InspectOptions = {
	depth: Number.POSITIVE_INFINITY,
	colors: true,
	numericSeparator: true,
	customInspect: true,
};

type Level = "INFO" | "SUCCESS" | "WARN" | "ERROR";

const style = (level: Level, reset = true) => {
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

	let color: string;
	switch (level) {
		case "SUCCESS":
			color = style.color.green;
			break;
		case "ERROR":
			color = style.color.red;
			break;
		case "WARN":
			color = style.color.orange;
			break;
		default:
			color = style.color.blue;
			break;
	}

	return `${color}${style.weight.bold}[${timestamp}]\n[${level}: MIDDLEWARE]${
		reset ? style.reset : ""
	}`;
};

const log = (data: unknown, level: Level = "INFO") => {
	if (typeof data === "object") {
		console.log(style(level));
		console.dir(data, {
			...otions,
			colors: false,
		});
	} else {
		console.log(`${style(level, false)}`);
		console.log(data, "\x1b[0m");
	}
};

export { log as dirlog };
