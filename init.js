import { config } from "./config.js"

export async function main(ns) {
    ns.print("test")
    ns.print(config.scanDepth)
}