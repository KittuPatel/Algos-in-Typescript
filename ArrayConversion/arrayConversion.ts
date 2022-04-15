const arrayConversion = (input: number[]): number => {

    let isOdd = true

    while (input.length !== 1) {
        input = sumProduct(input, isOdd)
        isOdd != isOdd
    }
    return input[0]
}

function sumProduct(nums: number[], isOdd: boolean) {
    let arr: number[] = []
    if (isOdd) {
        for (let i = 0; i < nums.length; i += 2) {
            let sum = nums[i] + nums[i+1]
            arr.push[sum]
        }  
    } else {
        for (let i = 0; i < nums.length; i += 2) {
            let product = nums[i] * nums[i+1]
            arr.push[product]
        }  
    }
    return arr
}

arrayConversion([1,2,3,4,5,6,7,8])