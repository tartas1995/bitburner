export async function main(ns) {
    for (let file of files) {
        await download(ns, file)
    }
}

const baseURL = "https://raw.githubusercontent.com/tartas1995/bitburner/master/"

const files = [
    "client/hack.js",
    "config.js",
    "deploit.js",
    "init.js",
    "scan.js",
    "store.js",
]

async function download(ns, file) {
    ns.tprint(`kill ${file}`)
    await ns.scriptKill(file ,ns.getHostname());
    ns.tprint(`remove ${file}`)
    await ns.rm(file);
    ns.tprint(`download ${file}`)
    await ns.wget(`${baseURL}${file}`, file);
}