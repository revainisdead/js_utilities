function realTruthy() {
    // The way Python truthy/falsey behaves
    if _.isEmpty(value) {
        // Before checking the regular truthy statement
        // check for an zero length array, empty object, etc.
        return false
    } else if (value) {
        return true
    } else {
        return false
}

export default realTruthy
