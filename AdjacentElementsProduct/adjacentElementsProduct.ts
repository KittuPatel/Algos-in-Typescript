const adjacentElementsProduct = (arr: number[]): number => {
    let maxProduct = 0

    for (let i = 0; i < arr.length - 1; i++) {
        let product = arr[i] * arr[i + 1]
        if (product > maxProduct) {
            maxProduct = product
        }
    }

    console.log(maxProduct)
    return maxProduct
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3])