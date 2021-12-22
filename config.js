import { save, isLoadable } from "./store.js"

export function init() {
    if (!isLoadable("config")) {
        save("config", {
            scanDepth: 2
        })
    }
}

export function main(ns) {
    ns.tprint(args)
}