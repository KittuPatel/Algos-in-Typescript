const allLongestStrings = (arr: string[]): string[] => {
    let maxCount = 0
    let longestStrings: string[] = []
    arr.forEach((element: string) => {
        maxCount = element.length > maxCount ? element.length : maxCount
    })
    arr.forEach((element: string) => {
        if (element.length === maxCount) {
            longestStrings.push(element)
        }
    })
    console.log(longestStrings)
    return longestStrings
}

allLongestStrings(["aa","aba",  "ad", "vcd", "aba"])