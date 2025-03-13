// BEGIN
export default function getSortedNames(users) {
    const userArray = new Array()

    users.forEach(element => {
        const {name:username} = element
        userArray.push(username)
    });

    return userArray.sort()
}
// END