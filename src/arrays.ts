/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 3;
    }
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    for (let i = 0; i < numbers.length; i++) {
        const parsed = parseInt(numbers[i]);
        // isNan checks if the value is not a number
        if (isNaN(parsed)) {
            numbers[i] = "0";
        } else {
            // i kinda hate how prettier does this but whatever. it also moved my comment here which i was slightly annoyed by
            numbers[i] = parsed.toString();
        }
    }
    return [];
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    for (let i = 0; i < amounts.length; i++) {
        // remove the dollar sign with substring
        if (amounts[i].startsWith("$")) {
            amounts[i] = amounts[i].substring(1);
        }
        const parsed = parseInt(amounts[i]);
        // use isNaN again
        if (isNaN(parsed)) {
            amounts[i] = "0";
        } else {
            amounts[i] = parsed.toString();
        }
    }
    return [];
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    for (let i = 0; i < messages.length; i++) {
        // i could get used to all of these string methods
        if (messages[i].endsWith("!")) {
            messages[i] = messages[i].toUpperCase();
        }
        if (messages[i].endsWith("?")) {
            messages.splice(i, 1);
            i--; // decrement index after removal, almost forgot that
        }
    }
    return [];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            count++;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    for (let i = 0; i < colors.length; i++) {
        if (
            // i really hate how prettier does this \/, this really does not look good to me personally
            colors[i] !== "red" &&
            colors[i] !== "blue" &&
            colors[i] !== "green"
        ) {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    let equation = "";
    if (addends.length == 0) {
        return "0=0";
    }
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
        if (i == 0) {
            equation += addends[i];
        } else {
            equation += "+" + addends[i];
        }
    }
    return sum + "=" + equation;
    // i really don't like how this looks but it works so whatever
    // also i had no clue you could do === instead of ==
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0) {
            values.splice(i, 0, sum);
            return values;
        }
        sum += values[i];
    }
    values.push(sum);
    return values;
}
