
obj = {
    value: "test",
    label: "Test Label",
    author: "Christian",
}

let Wrapper = (inc_obj) => {
    inc_obj.test1 = () => { console.log("proof of test1") }
    inc_obj.test2 = () => { console.log("proof of test2") }

    return inc_obj
}


// No work
//el_fin = new Wrapper(obj)

// mock
el_fin = {
    "test1": () => {},
    "test2": () => {},
}

el_fin.test1()
el_fin.test2()

// Then also test WITHOUT using new, and see if it works or not


el_fin_case2 = Wrapper(obj)

el_fin_case2.test1()
el_fin_case2.test2()



// Although it didn't work with node, apparently possible in the browser to use new with it



// Also, apparently this is possible to access property of object by string using this (could be thanks to angular)


function Test() {
    this.wtf = () => { console.log("wtf called") }

    this["wtf"]()
}
Test()
