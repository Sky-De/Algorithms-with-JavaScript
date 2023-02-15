
// Big-O = O(n) / Linear Time Complexity
export const recursiveFactorial = (n) => {
    if(n < 1) return 1;
    return n * recursiveFactorial(n-1);
}

// review