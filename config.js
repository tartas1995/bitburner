import { save, isLoadable, isLoadable } from "./store.js";

const defaultConfig = {
    scanDepth: 2
}

const typeConfig = {
    scanDepth: "number"
}

export function init() {
    if (!isLoadable("config")) {
        save("config", defaultConfig);
    }
}

function convertValue(key, value) {
    switch (typeConfig[key]) {
        case "number":
            return parseInt(value)
        case "string":
        default:
            return value
    }
}

export function main(ns) {
    if (!isLoadable("config")) {
        save("config", defaultConfig);
    }
    if (ns.args.length > 0) {
        let config = load("config");
        const overwrite = {};
        for (let arg of args) {
            const value = arg.split("=")
            overwrite[value[0]] = convertValue(value[0],value[1])
        }
        config = {...config, ...overwrite}
        save("config", config)
    } else {
        ns.tprint(load("config"))
    }
}