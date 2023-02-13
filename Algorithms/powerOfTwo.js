
// Big-O = O(logn) / Input size reduce by half
export const PowerOfTwo = (n) => {
    let count = 0;
    if(n < 1) return [false]
    while (n > 1) {
        if(n%2 !== 0) return false
        n /= 2;
        count++
    }
    return [true,`2^${count}`];
}

// Big-O = O(1) / Constant
export const PowerOfTwoBitWise = (n) => {
    if(n < 1) return false;
    return (n & (n-1)) === 0;
}

