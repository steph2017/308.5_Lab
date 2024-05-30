/* PT 1
write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number.
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/

// Return sum
function sumNums(...numbers) {
    let myResult = 0;
    if (numbers.length == 0) {
        return console.log("Please enter at least one number.")
    }
    else {
        for (i in numbers) {
            myResult += numbers[i];
        }
        console.log(myResult);
        return myResult;
    }
}

sumNums(5, 10, 15);
sumNums();


// return average

function avgNums(...numbers) {
    let myResult = 0;
    if (numbers.length == 0) {
        return console.log("Please enter at least one number.")
    }
    else {
        for (i in numbers) {
            myResult += numbers[i];
        }
        myResult = myResult / numbers.length;
        console.log(myResult);
        return myResult;
    }
}

avgNums(5, 10, 15);
avgNums();

// longest string - can use sort and .length:

function longestText(...texts) {
    texts.sort((a, b) => a.length - b.length);
    console.log(texts[texts.length - 1]);
    return texts[texts.length - 1]
}

longestText("d", "ela", "klsrfmerfelrfm", "", "dksm", "saoekcmddsjshdjshdjhshd", "dsdsdd", "23349");

// create filter function for word length

function wordFilter(wordArr, wordLimit) {
    let myResult = [];
    for (const word of wordArr) {
        if (word.length > wordLimit) {
            myResult.push(word);
        }
        else {

        }
    }
    console.log(myResult);
    return myResult;
}

wordFilter(["some", "cool", "words", "to", "try", "&", "figure", "out", "finally!"], 3);
wordFilter(["some", "cool", "words", "to", "try", "&", "figure", "out", "finally!"], 1);
wordFilter(["some", "cool", "words", "to", "try", "&", "figure", "out", "finally!"], 6);

/* PT 2
Use callback functions alongside Array methods to accomplish the following:
Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/

let pt2Data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// use sort method for age:

let ageSort = pt2Data.sort((a, b) => Number(a.age) - Number(b.age));
console.log(ageSort);

// find replace and increment with map:

let jobageArr = pt2Data.map((oldObj) => newObj = {
    id: oldObj.id,
    name: oldObj.name,
    job: oldObj.occupation,
    age: String(Number(oldObj.age) + 1)
});
console.log(jobageArr);

// reduce practice - my issue is that after the first iteration, a becomes a number so you cannot do a.age. 
// update: mdn acknowledged that issue - says i need to use copies to avoid...
// update: just stop the .age on a ...

let ageSum = pt2Data.reduce((a, b) => a + Number(b.age), 0);
console.log(ageSum);

// pt 5 average age:

averAge = ageSum / pt2Data.length;
console.log(averAge);

/**
It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions 
by value or by reference. This important distinction changes the way that functions behave,
 and can have large impacts on the way a program executes.
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. 
Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object
 created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior? 
*/

// increment the object 

function ageAdd(theObject) {
    if (theObject.hasOwnProperty("age") && theObject.hasOwnProperty("updated_at")) {      // look for existing age key;
        theObject.age += 1;
        theObject.updated_at = Date(theObject.updated_at).getTime();
    }
    else if (theObject.hasOwnProperty("age")) {
        theObject.age += 1;
        theObject.updated_at = Date.now(); // creates new updated_at field

    }
    else if (theObject.hasOwnProperty("updated_at")) {
        theObject.age = 0; //Creates new "age" field
        theObject.updated_at = Date(theObject.updated_at).getTime();
    }
    else {
        theObject.age = 0;
        theObject.updated_at = Date.now();
    }
    console.log(theObject);
    return theObject
}

let myObj = { age: 10, friend: true };
ageAdd(myObj);
console.log(myObj);

// for the pt.3.2 - i would use the json stringfy and parse methods to make a copy - then apply the same logic, then return the copy .
