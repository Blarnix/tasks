/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * be the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length <= 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // this was really annoying to write, i had to figure out how to parse it to an integer, then figure out the string's value
    const str2int = numbers.map((value: string): number => {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
    return str2int;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // this was really annoying to write, i had to figure out how to parse it to an integer, then figure out the string's value
    const dollar2int = amounts.map((value: string): number => {
        const parsed = parseInt(value.replace("$", ""), 10);
        return isNaN(parsed) ? 0 : parsed;
    });
    return dollar2int;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filteredMessages = messages.filter(
        (message: string) => !message.endsWith("?"),
    );
    const transformedMessages = filteredMessages.map((message: string) =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return transformedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((color: string) =>
        ["red", "blue", "green"].includes(color),
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length <= 0) {
        return "0=0";
    }
    const sum = addends.reduce((acc: number, value: number) => acc + value, 0);
    const addendString = addends.join("+");
    return `${sum}=${addendString}`;
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
    const firstNegIndex = values.findIndex((value) => value < 0);
    const sum = values
        .slice(0, firstNegIndex === -1 ? values.length : firstNegIndex)
        .reduce((acc, value) => acc + value, 0);
    // this looks so ugly to me personally, i miss C.
    return firstNegIndex === -1 ?
            [...values, sum]
        :   [
                ...values.slice(0, firstNegIndex + 1),
                sum,
                ...values.slice(firstNegIndex + 1),
            ];
}
