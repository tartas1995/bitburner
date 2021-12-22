import { initConfig } from "./config.js";
import { scan } from "./scan.js";
import { save } from "./save.js";

export async function main(ns) {
    ns.tprint("init Config");
    initConfig();
    save("knownNodes", scan(ns));
}