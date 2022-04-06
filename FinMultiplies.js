/*It's the that return list of multiplies integer to limit inclusive*/
function findMultiples(integer, limit) {
    let array = [];
    let number = integer
    while(number<=limit){
        array.push(number)
        number = number+integer
    }
    return array
}
