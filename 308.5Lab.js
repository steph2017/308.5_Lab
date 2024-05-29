/*
write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/

// // Return sum
// function sumNums(...numbers) {
//     let myResult = 0;
//     if (numbers.length == 0) {
//         return console.log("Please enter at least one number.")
//     }
//     else {
//         for (i in numbers) {
//             myResult += numbers[i];
//         }
//         console.log(myResult);
//         return myResult;
//     }
// }

// sumNums(5, 10, 15);
// sumNums();


// // return average

// function avgNums(...numbers) {
//     let myResult = 0;
//     if (numbers.length == 0) {
//         return console.log("Please enter at least one number.")
//     }
//     else {
//         for (i in numbers) {
//             myResult += numbers[i];
//         }
//         myResult = myResult / numbers.length;
//         console.log(myResult);
//         return myResult;
//     }
// }

// avgNums(5, 10, 15);
// avgNums();

// longest string - can use sort and .length:

// function longestText(...texts) {
//     texts.sort((a, b) => a.length - b.length);
//     console.log(texts[texts.length - 1]);
//     return texts[texts.length - 1]
// }

// longestText("d", "ela", "klsrfmerfelrfm", "", "dksm", "saoekcmddsjshdjshdjhshd", "dsdsdd", "23349");

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