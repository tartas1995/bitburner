import { initConfig } from "./config.js";
import { scan } from "./scan.js";
import { save, isLoadable, load } from "./store.js";

export async function main(ns) {
    ns.tprint("init Config");
    initConfig();
    if (!isLoadable("knownNodes")) {
        save("knownNodes", scan(ns));
    }
}