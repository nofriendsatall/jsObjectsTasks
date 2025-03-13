// BEGIN
export default function pick(obj, keys){
    const result = {};
    for (const key of keys) {
      for (const iterator in obj) {
        if (iterator === key) {
            result[key] = obj[key]
        }
      }
    }
    return result;
  };


// END