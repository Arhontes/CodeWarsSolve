/*функция вычисляет сколько циклов нужно чтобы число p0 догнало число p, при этом каждый цикл число p0 будет увеличиваться на
* percent и к нему будет добавлено значение aug*/
function nbYear(p0, percent, aug, p) {
    var totalPeople = p0;
    var peoplePlusInYear = totalPeople * Math.round(percent/100)
    var years = 0;

    while(totalPeople<p){


        peoplePlusInYear = Math.round(totalPeople * percent/100);
        totalPeople += peoplePlusInYear + aug;
        years++;
    }
    return years;
}

function nbYear2(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}