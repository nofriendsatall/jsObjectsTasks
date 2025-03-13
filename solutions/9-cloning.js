// BEGIN
export default function cloneShallow(object) {
    const resultObject = new Object()

    for (const key in object) {
        resultObject[key] = object[key]
    }

    return resultObject
}
// END
