// old
Array.prototype.doSomething = function() {}

// new
Object.defineProperty(Array.prototype, "insert", {
    value: function() {
        // write a way to insert at position without usage of splice
        //
        // splice modifies in place, we want to return new array

        // Create custom insert function for array, splice modifies in place
        let insert = (array, index, item) => array.splice(index, 0, item)
    }
})

//const insert = (array, index, item) -> array.splice(index, 0, item)
//export insert;
