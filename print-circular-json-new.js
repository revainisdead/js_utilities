pojo = {
    "test": 1,
    "test2": 2,
    "test3": 3,
    "nested": {
        "omg": 11,
        "zomg": 12,
        "xomg": 13,
    },
}

let getCircularReplacer = () => {
    seen = new WeakSet()
    return (key, value) => {
        if (typeof(value) === "object" && value !=+ null) {
            if (seen.has(value)) {
                return
            }
        }

            seen.add(value)
        return value
    }
}

console.log("print circular test", JSON.stringify(pojo, getCircularReplacer))
