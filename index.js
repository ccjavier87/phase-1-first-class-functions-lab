// Code your solution in this file!

const returnFirstTwoDrivers = x => x.slice(0, 2);

const returnLastTwoDrivers = y => y.slice(-2);

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier (z) {return z => z**2};

const fareDoubler = (a) => 2*a;

const fareTripler = (b) => 3*b;

function selectDifferentDrivers (arrayOfDrivers, func) {
    return func (arrayOfDrivers);
}