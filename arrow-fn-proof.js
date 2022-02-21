const parent = {
    name: "First Last",
    test: function () {
        return `${this.name}`               // works (function gets context of object)
    },
    testarr: () => {
        console.log(`${this.name}`);        // no work (arrow function)
        console.log(`${parent.name}`);      // works
    },
    testInnerRegular: function () {
        console.log(`${this.name}`);        // works (regular function)

        // regular function
        function innerFn() {
            console.log(`${this.name}`);
        }

        innerFn();                          // no work (inner regular function)
    },
    testInnerArrow: function () {
        console.log(`${this.name}`);        // works (regular function)

        // arrow function
        let innerFn = () => {
            console.log(`${this.name}`);
        }

        innerFn();                          // works (inner arrow function)
    },
};

// Summary: arrow function encapulates parent context (generates no `this` of its own)

console.log("Test 1")
name_test = parent.test()
console.log(name_test)
// output: 'First Last'
console.log("\n")

console.log("Test 2")
parent.testarr()
// output: undefined
// output: 'First Last'
console.log("\n")

console.log("Test 3")
parent.testInnerRegular()
// output: 'First Last'
// output: undefined
console.log("\n")

console.log("Test 4")
parent.testInnerArrow()
// output: 'First Last'
// output: 'First Last'
console.log("\n")
