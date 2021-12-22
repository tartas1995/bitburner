function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

function load(key) {
    return JSON.parse(localStorage.getItem(key))
}

function isLoadable(key) {
    return localStorage.getItem(key) !== null
}

export {
    save,
    load,
    isLoadable
}