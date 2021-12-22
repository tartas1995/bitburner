export function main(ns) {
    const currentSystem = ns.getHostname();
    const moneyThreshold = ns.getServerMaxMoney(currentSystem) * 0.75;
    const securityThreshold = ns.getServerMinSecurityLevel(currentSystem) + 5;
    if (ns.fileExists("BruteSSH.exe", currentSystem)) {
        brutessh(currentSystem);
    }
    ns.nuke(currentSystem);
    while (true) {
        if (ns.getServerMinSecurityLevel(currentSystem) > securityThreshold) {
            ns.weaken(currentSystem);
        } else if (ns.getServerMoneyAvailable(currentSystem) < moneyThreshold) {
            ns.grow(currentSystem);
        } else {
            ns.hack(currentSystem);
        }
    }
}