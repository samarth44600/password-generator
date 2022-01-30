
const alphabetsLower: string = "abcdefghijklmnopqrstuvwxyz";
const alphabetsUpper: string = alphabetsLower.toUpperCase();
const number: string = "0123456789";
const specialChars: string = "~!@#$%^&*-_/:;,.";

let indexGenerator = (givenString: string): number => {
    return Math.ceil(Math.random() * givenString.length - 1);
}


export const generatePassword = (length: number, chars: boolean): string => {
    let randomPassword: string = "";

    for (let i: number = 1; i <= length; i++) {
        if (chars) {
            if (i % 2 === 0) {
                randomPassword = randomPassword + specialChars[indexGenerator(specialChars)];
                continue;
            }
        }

        if (i % 4 === 0) {
            randomPassword = randomPassword + alphabetsLower[indexGenerator(alphabetsLower)];
            continue;
        }

        if (i % 3 === 0) {
            randomPassword = randomPassword + alphabetsUpper[indexGenerator(alphabetsUpper)];
            continue;
        }
        randomPassword = randomPassword + number[indexGenerator(number)];

    }

    return randomPassword;
}