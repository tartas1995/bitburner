import { load } from "./store.js";

export function main(ns) {
    for (let target of getTargets()) {
        deploit(ns, target);
    }
}

function getTargets() {
    const nodes = load("knownNodes");
    return nodes.filter((node) => {
        return node !== "home";
    })
}

const baseFolder = "client";
const files = [
    "hack.js"
]

function deploit(ns, target) {
    ns.scp("NUKE.exe", target);
    for (let file of files) {
        ns.scp(`/${baseFolder}/${file}`, target);
    }
    ns.exec(`/${baseFolder}/hack.js`, target);
}