import { save, isLoadable, load } from "./store.js";

const defaultConfig = {
    scanDepth: 2
}

const typeConfig = {
    scanDepth: "number"
}

function init() {
    if (!isLoadable("config")) {
        save("config", defaultConfig);
    }
}

function getConfig() {
    return load("config")
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

function main(ns) {
    if (!isLoadable("config")) {
        save("config", defaultConfig);
    }
    if (ns.args.length > 0) {
        let config = load("config");
        const overwrite = {};
        for (let arg of ns.args) {
            const value = arg.split("=")
            overwrite[value[0]] = convertValue(value[0],value[1])
        }
        config = {...config, ...overwrite}
        save("config", config)
    } else {
        ns.tprint(load("config"))
    }
}

export {
    main,
    getConfig,
    init as initConfig
}