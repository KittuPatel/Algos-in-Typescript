const areEquallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean => {
    console.log(yourLeft + yourRight <= friendsLeft + friendsRight)
    return (yourLeft + yourRight <= friendsLeft + friendsRight) 
}

areEquallyStrong(10, 15, 15, 10)
areEquallyStrong(15, 10, 15, 10)
areEquallyStrong(15, 10, 15, 9)