const companies = [
  { name: "One", category: "Finance", start: 1981, end: 2003 },
  { name: "Two", category: "Technology", start: 1991, end: 2013 },
  { name: "Three", category: "HR", start: 1998, end: 2007 },
  { name: "Four", category: "Health", start: 2001, end: 2019 },
  { name: "Five", category: "Finance", start: 1975, end: 1998 },
  { name: "Six", category: "Technology", start: 2014, end: 2019 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company) {
//     console.log(company);
// });

// filter
// let canDrink = [];
// for(let i=0; i< ages.length; i++) {
//     if(ages[i] >=21) {
//         canDrink.push(ages[i])
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// map

const testMap = companies.map(function(company) {
  return `Name: ${company.name}`;
});
console.log(testMap);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

// sort
const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies2);

const sortAges = ages.sort((a, b) => b - a);
console.log(sortAges);

// reduce
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

const ageSum2 = ages.reduce(function(total, age) {
  return total + age;
}, 0);
console.log(ageSum2);

const ageSum3 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum3);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);

// Combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
