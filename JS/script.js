/*Your Code Goes Here*/


//Challange 2
function printFullAge(years) {
    var ages = [];
    var fullAge = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];

        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' Is ' + ages[i] + ' Years Old. AND It\'s Full Age');
            fullAge.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' Is ' + ages[i] + ' Years Old. AND It\'s NOT Full Age');
            fullAge.push(false);
        }

    }
    return fullAge;
}

var years = [1990, 1995, 2010, 2000, 2001];

var full_1 = printFullAge(years);
var full_2 = printFullAge([2000, 2001, 1999, 1995]);
