const testWords = ["baa", "abcd", "abca", "cab", "cad"];
const testWords2 = ["caa", "aaa", "aab"];

function alienDict(words) {
    var res = [];

    for (var i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let nextWord = i == words.length - 1 ? "" : words[i + 1];

        if (nextWord === "") {
            for (let j = 0; j < currentWord.length; j++) {
                const lChar = currentWord[j];
                if (res.findIndex(x => x === lChar) === -1) {
                    res.push(lChar);
                }
            }
        }

        let loop = currentWord.length < nextWord.length ? currentWord.length : nextWord.length;
        console.log(currentWord);
        for (let j = 0; j < loop; j++) {
            let currentChar = currentWord[j];
            let nextChar = nextWord[j];
            if (currentChar !== nextChar) {
                if (res.findIndex(x => x === lChar) === -1)
                    res.push(currentChar);
                break;
            }
        }
    }

    return res;
}
