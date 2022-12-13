function callbackForLab() {
    return (function() {console.log("Callback stuff")});
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function returnsStuff() {console.log("Stuff.")};
}

function returnsAnAnonymousFunction() {
    return (function() {console.log("Some other stuff")});
}