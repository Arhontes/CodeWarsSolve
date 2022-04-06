function turn(current, target) {
    let object = {
        N:1,
        E:2,
        S:3,
        W:4
    }
    let curs = object[current]
    let tar = object[target]


    if(curs==1&&tar==4)
        return 'left'
    else if(curs<tar){
        return 'right'
    }

    else if(curs==4&&tar==1)
        return 'right'
    return 'left'
}