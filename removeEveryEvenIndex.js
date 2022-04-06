/*remove elements with index != index%2*/
function removeEveryEvenIndex(arr){
    var result = arr.filter((e,i)=>!(i%2)) /*filter((element, index) => { ... } )*/
    return result;
}


