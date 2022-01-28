// doubleValues
const arr1 = [1,2,3] // [2,4,6]
const arr2 = [5,1,2,3,10] // [10,2,4,6,20]
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
    newArr.push(val * 2);
});
    return newArr;
};

// onlyEvenValues
const arr1 = [1,2,3] // [2]
const arr2 = [5,1,2,3,10] // [2,10]
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val);
        }
    });
        return newArr;
}

// showFirstandLast
const arr1 =['colt','matt', 'tim', 'test'] // ["ct", "mt", "tm", "tt"]
const arr2 = ['hi', 'goodbye', 'smile'] // ['hi', 'ge', 'se']
function showFirstAndLast(arr){
    let newArr = []
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length -1]);
    });
    return newArr
}
// addKeyandValue
let arr1 = (
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */
function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
};
// vowelCount
function vowelCount(str){
    let splitArr = str.split('');
    let obj = {};
    const vowels = 'aeiou';

    splitArr.forEach(function(letter){
        let lowerCasedLetter = letter.toLowerCase()
        if (vowels.indexOf(lowerCasedLetter) !== -1){
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else{
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}
// MAP
// doubleValuesWithMap
const arr1 = [1,2,3] // [2,4,6]
const arr2 = [1,-2,-3] // [2,-4,-6]
function doubleValuesWithMap(arr){
 return arr.map(function(val){
     return val * 2;
 });
}
// valTimesIndex
const arr1 = [1,2,3] // [0,2,6]
const arr2 = [1,-2,-3] // [0,-2,-6]
function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;
    })
}
// extractKey
    const arr1 =(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name')
  
//     // ['Elie', 'Tim', Matt', 'Colt']
// function extractKey(arr, key) {
//     return arr.map(function(val) {
//       return val[key];
//     });
//   }
//extractFullName
/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
// FILTER
// filterByValue
function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}
const arr1 = (
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ], isCatOwner);
//find
function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }
//findInObj
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
//removeVowels
function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
//doubleOddNumbers
function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }
