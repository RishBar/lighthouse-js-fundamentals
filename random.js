function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

var laugh = function(x) {
    let daLaughs = ""
    for (u = 1; u <= x; u++) {
        daLaughs = daLaughs + "ha"
    }
    return daLaughs
}

emotions("happy", laugh)