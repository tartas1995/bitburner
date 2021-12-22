export async function main(ns) {
    for (let file of files) {
        download(ns, file)
    }
}

const files = [
    "init.js",
    "config.js",
]

function download(ns, file) {
    ns.scriptKill(file ,ns.getHostname());
    ns.rm(file)
}