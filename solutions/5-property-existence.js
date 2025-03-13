// import _, { uniq } from 'lodash';

// import { uniq } from "lodash";

// import { toLower } from "lodash"

// BEGIN
export default function countWords(text) {
    if (text.length === 0) {
        return {}
    }
    let uniqueWords = new Set(text.split(' ').map(n => n.toLowerCase()))

    let resultObject = {}
    for (const word of uniqueWords) {
        let counter = 0
        for (const iterator of text.split(' ').map(n => n.toLowerCase())) {
            if (word === iterator) {
                counter++
            }
        }
        resultObject[word] = counter
    }

    return resultObject
}


// END