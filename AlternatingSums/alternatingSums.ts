const alternatingSums = (input: number[]): number[] => {
    const outputArr: number[] = [0,0]
    for (let i = 0; i <= input.length - 1; i++){
        if (i % 2 == 0) {
            console.log(i)
            outputArr[0] += input[i]
        } else {
            console.log(i)
            outputArr[1] += input[i]
        }
    }
    console.log(outputArr)
    return outputArr
}

alternatingSums([50,60,60, 45, 70])