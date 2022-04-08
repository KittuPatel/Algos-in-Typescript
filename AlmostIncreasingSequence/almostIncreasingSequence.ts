const almostIncreasingSequence = (arr: number[]): boolean => {

    let seqCount = 0
    for (let i = 0; i < arr.length; i++) {
 
        if (arr[i] <= arr[i - 1]) {
            seqCount += 1
            if (arr[i] < arr[i-2] && arr[i+1] <= arr[i-1]) {
                return false
            }
        }  
    }
    return seqCount <= 1;

}

console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 3, 2, 1]))