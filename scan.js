import { getConfig } from "./config.js";

let config = null;

function scan(ns) {
    config = getConfig()
    return [...rScan(ns, ns.getHostname())];
}

function rScan(ns, node, depth = 1, knownNodes = new Set()) {
    if (depth === config.scanDepth) {
        const nodes = ns.scan(node);
        for (let nn of nodes) {
            knownNodes.add(nn);
        }
    } else {
        const nodes = ns.scan(node);
        for (let node of nodes) {
            knownNodes.add(node);
            rScan(ns, node, depth + 1, knownNodes);
        }
        return knownNodes;
    }
}

export {
    scan
}