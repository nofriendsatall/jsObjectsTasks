// BEGIN
export default function make(companyName,additionalProperties = undefined) {
    if (additionalProperties !== undefined) {
        return {
            name : companyName,
            state: 'moderating',
            createdAt: Date.now(),
            ...additionalProperties
        }
        
    }
    return {
        name: companyName,
        state: 'moderating',
        createdAt: Date.now(),
    }
}
// END

