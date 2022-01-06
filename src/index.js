module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    const DIGITS = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const TENS = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const TEEN_NUMBERS = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let result = [];

    if (number >= 100) {
        result.push(`${DIGITS[Math.floor(number / 100)]} hundred`);
        number %= 100;
    }

    if (number >= 10 && number <= 19) {
        result.push(TEEN_NUMBERS[number]);
        return result.join(" ");
    }

    if (number > 19) {
        result.push(`${TENS[Math.floor(number / 10)]}`);
        number %= 10;
    }

    if (number > 0) {
        result.push(`${DIGITS[number]}`);
    }

    return result.join(" ");
};
