const absoluteValuesSumMinization = (arr: number[]): number => { 
    const isEven = arr.length % 2 === 0
    const mid = arr.length / 2
    if (isEven) {
        return arr[mid - 1]
    } else {
        const elementIndex = Math.floor(mid)
        return arr[elementIndex]
    } 
}

console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]))  
