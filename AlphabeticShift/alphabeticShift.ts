const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const alphabeticShift = (inputString: string): string => {
    const result: string[] = []
    inputString.split('').forEach(element => {
        let index = alphabets.indexOf(element)
        console.log(index)
        if (index == 25) {
            result.push('a')
        } else {
            result.push(alphabets[index + 1])
        }    
    })
    console.log(result.join(''))
    return result.join('')
} 

alphabeticShift("crazy")