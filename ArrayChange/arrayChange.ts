const arrayChange = (inputArray: number[]): number => {
    let count = 0

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            let diff = (inputArray[i] + 1) - inputArray[i + 1]
            inputArray[i + 1] = inputArray[i] + 1
            count += diff
        }
    }

    return count
}

console.log(arrayChange([1,1,1]))