
// Big-O = O(logn) / logarithmic Time Complexity
export const recursiveBinarySearch = (array,target) => {

    return Search(array, target, 0, array.length-1);
}

function Search(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return -1;
    let middleIndex = Math.floor((leftIndex + rightIndex) *0.5);

    if(target === array[middleIndex]) return middleIndex;

    if(target < array[middleIndex]) return Search(array, target, leftIndex, middleIndex -1);
    else return Search(array, target, middleIndex +1, rightIndex);
}

//reveiw