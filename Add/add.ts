const addFunc = (param1: number, param2: number): number => {
    return param1 + param2
}

console.log(addFunc(1, 99))


// no.of parameters are unknown so making use of the rest operator.
const addAllParamsFunc = (...params: number[]): number => {
    let result = 0
    params.forEach(element => {
        result = result + element
    });
    return result
}

console.log(addAllParamsFunc(1,2,3,4,5))