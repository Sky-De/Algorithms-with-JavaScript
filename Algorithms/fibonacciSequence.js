
// Big-O = O(n) / Linear Time Complexity
export const FibonacciSequence1 = (n) => {
    let result = [0,1];
    if(n === 0) return [0]
    if(n === 1 || n === 2) return [0,1]
    else{
        for (let i = 2; i < n; i++) {
        let sum = result[result.length - 1] + result[result.length - 2];
        result.push(sum)  
        }
    return result;
    }
}

// -----------------------------------------------------------------------------------------------

// Big-O = O(n) / Linear Time Complexity
export const FibonacciSequence2 = (n) => {
    const fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}


// -----------------------------------------------------------------------------------------------
