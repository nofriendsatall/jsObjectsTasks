// BEGIN
export default function get(object,arr) {
  let currentObject = object

  for (const key of arr) {
    if (typeof currentObject === 'object' & Object.hasOwn(currentObject,key)) {
      currentObject = currentObject[key]
    }
    else{
      return null
    }
  }

  return currentObject
}
// END



