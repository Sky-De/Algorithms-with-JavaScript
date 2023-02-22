
// Big-O = O(n) / Linear Time Complexity
export const climbingStaircase = (n) => {
    const noOfWays = [1, 2];

    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }

    return noOfWays[n -1];
}

