
// Big-O = O(2^n) / recursion in not a good solution for fibonacciSequence
export const recursiveFibonacci = (n) => {
    if(n < 2) return n;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

// review
