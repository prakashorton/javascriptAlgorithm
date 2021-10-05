const possibleWords = [
    "mobile",
    "samsung",
    "sam",
    "sung",
    "man",
    "mango",
    "icecream",
    "and",
    "go",
    "i",
    "love",
    "ice",
    "cream"
];

const testString = "iloveicecreamandmango";

function getPossibleBreaks(
    randomText,
    preText = "",
    sentences = []
) {
    const textLength = randomText.length;
    for (let cI = 0; cI <= textLength; cI += 1) {
        const charSet = randomText.substr(0, cI);
        console.log(charSet);
        if (possibleWords.indexOf(charSet) > -1) {
            if (cI === textLength) {
                preText += charSet;
                sentences.push(preText);
                break;
            }
            const restOfTheText = randomText.substring(cI);
            const updatedPreText = preText + charSet + " ";
            getPossibleBreaks(restOfTheText, updatedPreText, sentences);
        }
    }
    return sentences;
}

function getPossibleSentences(randomText) {
    return getPossibleBreaks(randomText);
}