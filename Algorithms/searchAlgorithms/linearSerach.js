
// Big-O = O(n) / Linear Time Complexity
export const linearSearch = (array,target) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === target) return i;
    }
    return -1;
}