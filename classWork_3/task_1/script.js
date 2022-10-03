function f1() {

    if (true) {
        var x1 = 34
        let x2 = 35
        x3 = 36
        const x4 = 37
    }

    console.log(x1)
    // console.log(x2)
    console.log(x3)
    // console.log(x4)
}

// f1()

function f2() {

    var x1 = 34
    let x2 = 35
    x3 = 36
    const x4 = 37

    console.log(x1)
    console.log(x2)
    console.log(x3)
    console.log(x4)

    x1 = 44
    x2 = 45
    x3 = 46
    x4 = 47

    console.log(x1)
    console.log(x2)
    console.log(x3)
    console.log(x4)
}

f2()