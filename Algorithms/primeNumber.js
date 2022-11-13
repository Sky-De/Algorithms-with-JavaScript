
// Big-O = O(n) / Linear Time Complexity
export const PrimeNumber1 = (n) => {
    if(n < 2) return false;
    for (let i = 2; i < n; i++) {
        if(n%i === 0) return false;
    }
    return true;
}

// Big-O = O(sqrt(n)) 
export const PrimeNumber2 = (n) => {
    if(n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i === 0) return false;
    }
    return true;
}