import _ from 'lodash';

// BEGIN
export default function fill(thisObject,arr,otherObject) {
    if (arr.length === 0) {
        for (const key in otherObject) {
            thisObject[key] = otherObject[key]
        }
    }

    arr.forEach((element)=>{thisObject[element] = otherObject[element]})
}
// END