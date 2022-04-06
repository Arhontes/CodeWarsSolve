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
<<<<<<< HEAD
function findMultiples2(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}
=======
>>>>>>> origin/master
