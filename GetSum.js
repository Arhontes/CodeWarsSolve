/*суммирует все между двумя числами*/
function GetSum( a,b )
{

    if (a == b) return a;
    else if (a < b) return a + GetSum(a+1, b);
    else return a + GetSum(a-1,b);
}

function getSum2( a,b )
{
    let sum = 0;
    if (a==b){
        return a
    }
    else if (a<b){
        while(a <= b){
            sum+=a;
            a++;
        }
    }
    else{
        while(b <= a){
            sum+=b;
            b++;
        }
    }
}