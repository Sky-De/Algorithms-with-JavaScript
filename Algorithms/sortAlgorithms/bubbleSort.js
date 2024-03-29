
// Big-O = O(n^2) / Quadratic Time Complexity
export const bubbleSort = (array) => {
    let swapped;
    do{
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if( array[i] > array[i+1] ){
                [ array[i], array[i+1] ] = [ array[i+1], array[i] ];
                swapped = true;
            } 
            
        }
    }while(swapped)
    return array;
}