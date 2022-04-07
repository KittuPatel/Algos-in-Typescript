const addBorder = (picture: string[]): string[] => {

    const wall = '*'.repeat(picture[0].length + 2);
    picture.unshift(wall)
    picture.push(wall)

    for (let i = 1; i <= picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }
    console.log(picture)
    return picture
}

addBorder(["abc","ded"])