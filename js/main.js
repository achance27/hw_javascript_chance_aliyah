// ICE CREAM
var iceCream = ['coffee', 'salted caramel', 'vanilla',
    'cookies and cream'];

// PRESIDENTS
var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: 1, party: 'Republican', yearsOfPresidency: 1},
    {firstName: 'Barack', lastName: 'Obama', termLength: 2, party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George W.', lastName: 'Bush', termLength: 2, party: 'Republican', yearsOfPresidency: 8},
    {firstName: 'Bill', lastName: 'Clinton', termLength: 2, party: 'Democrat', yearsOfPresidency: 8},
    {firstName: 'George H.W.', lastName: 'Bush', termLength: 1, party: 'Republican', yearsOfPresidency: 4}
];
console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

//  HOWDY
function howdy() {
    console.log('Aliyah Chance says hi!');
}
howdy();

//  NUMBA EXPRESSION
var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length === 7) {
        console.log('7, what a perfect choice');
    } else {
        console.log('I\'m sorry, but that\'s too many to count.');
    }
};
numba('7');
numba('seventy');
numba('university');
