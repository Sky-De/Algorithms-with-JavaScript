

// Big-O = O(logn) / logarithmic Time Complexity
export const binarySearch = (array,target) => {
    let leftIndex = 0;
    let rightIndex = array.length-1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) *0.5);

        if(target === array[middleIndex]) return middleIndex;
        
        if(target < array[middleIndex]) rightIndex = middleIndex -1;
        else leftIndex = middleIndex + 1; 
    }
    return -1;
}

