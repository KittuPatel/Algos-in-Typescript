const addDigits = (num: number): number => {
    const nums = num.toString().split('')
    let result = 0
    nums.forEach(element => {
        result += parseInt(element)
    })
    console.log(result)
    return result
}

console.log(addDigits(29))