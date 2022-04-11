const alphabeticSubsequence = (input: string): boolean => {
    
    let strArray = input.split('')
    const charValues: number[] = []

    strArray.forEach((char: string) => charValues.push(char.charCodeAt(0)))

    if (new Set(strArray).size !== charValues.length) return false

    for (let i = 0; i < charValues.length - 1; i++) {
        if(charValues[i] >= charValues[i+1]) return false
    }

    return true;
}

alphabeticSubsequence('acce')
alphabeticSubsequence('ace')