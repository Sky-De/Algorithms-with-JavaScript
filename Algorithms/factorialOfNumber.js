

// Big-O = O(n) / Linear Time Complexity
export const FactorialOfNumber1 = (n) => {
    let result = 1;
    if(n === 0) return 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;

}

// Big-O = O(n) / Linear Time Complexity
export const FactorialOfNumber2 = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

}