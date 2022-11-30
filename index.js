/**
 *
 * EXAM 1
 * @param {number} length
 */
function renderFishBash(numberLength) {
    /** Validate parameter before proses */
    if (typeof numberLength !== "number") return "Your input is not number";

    for (let index = 1; index <= numberLength; index++) {
        if (index % 15 === 0) console.log("fishbash");
        else if (index % 3 === 0) console.log("fish");
        else if (index % 5 === 0) console.log("bash");
        else console.log(index);
    }
}

renderFishBash(45);

/**
 *
 * EXAM 2
 * @param {number[]} arrayNum
 */

function sortarray(arrayNum) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < arrayNum.length; i++) {
            /** Validate value array before sort proses */
            if (typeof arrayNum[i] !== "number")
                return "The array data must only number";

            if (arrayNum[i - 1] > arrayNum[i]) {
                done = false;
                console.log(arrayNum[i]);
                let tmp = arrayNum[i - 1];
                arrayNum[i - 1] = arrayNum[i];
                arrayNum[i] = tmp;
            }
        }
    }
    console.log(arrayNum);
}

const dummy = [8, 2, 10, 3, 6];
sortarray(dummy);

/**
 *
 * EXAM 3
 * @param {string} word
 */
function isRevereseWord(word) {
    /** Validate word before proses */
    if (typeof word !== "string") return "The word must be a string";

    const wordLength = word.length;
    for (let i = 0; i < Math.ceil(wordLength / 2); i++) {
        if (word[i] !== word[wordLength - 1 - i]) {
            return false;
        }
    }
    return true;
}

isRevereseWord("makam");
