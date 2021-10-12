function sum(a,b) {
    return a+b;
}

function divide(a,b) {
    return a/b;
}

function calculate(fn, prev) {
    return (after) => fn(prev, after);
}

function calculate(fn, prev) {
    function calculateTwo(after) {
        return fn(prev, after);
    }
    return calculateTwo;
}

// partial function

const sum100 = calculate(sum, 100)
const divide100 = calculate(divide, 100)

console.log(sum100(20));  //120
console.log(divide100(20)); //5
