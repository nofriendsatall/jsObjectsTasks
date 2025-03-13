import * as CRC32 from "crc-32";
// BEGIN


export function make() {
    const arr = new Array(100)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = undefined
    }

    return arr
}

function calculateHash(key) {
    return Math.abs(CRC32.str(key)) % 100
}

export function set(map,key,value) {
    const hash = calculateHash(key)

    if (map[hash] === undefined) {
        map[hash] = [hash,key,value]
        return true
    }
    else{
        if (map[hash][1] === key) {
            map[hash][2] = value
            return true
        }
    }
    return false
}

export function get(map,key,defaultValue = null) {
    const hash = calculateHash(key)

    if (map[hash] === undefined) {
        return defaultValue
    }

    if (map[hash][1] === key) {
        return map[hash][2]
    }
    return defaultValue
}

// END