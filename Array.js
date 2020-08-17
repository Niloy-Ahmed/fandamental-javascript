var friendAge = [15, 17, 19, 24]  //Array position start from 0,1,2,3.......
var sonali = friendAge[3]; //How to know arrary position
friendAge[1] = 21; // Do array position change 

var position = friendAge.indexOf(19); // If we want to get out of any position. ANS: 2
console.log(position);
var position2 = friendAge.indexOf(141); //ANS: -1 because there is no one array.
console.log(position2);
friendAge.push(11);  //Array push means something add under array box. and it set last index position
console.log(friendAge);

friendAge.pop(20) //pop means do remove last index number. 

friendAge.unshift(45);
friendAge.unshift(30);//The unshift() method adds new items to the beginning of an array, and returns the new length.
friendAge.shift(22); //The shift() method removes the first item of an array.

console.log(friendAge);

console.log(friendAge.length); // how meny index have there . length use Ans: 5 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1,4)); //The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument
console.log(animals);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months); //The splice() method changes the contents of an array by removing or replacing    existing elements and/or adding new elements in place.
