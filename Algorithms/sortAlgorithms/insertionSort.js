
// Big-O = O(n^2) / Quadratic Time Complexity
export const insertionSory = (arr) => {

    for (let i = 1; i < array.length; i++) {
        let numberToInsert = arr[i];
        let j = i -1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j -1;
        }
        arr[j+1] = numberToInsert;
    }

    return arr;
}


// review