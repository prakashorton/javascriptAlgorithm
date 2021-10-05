var data = ["Hai, Hello, How, Are, You", "hai, Welcome, How, About, You", "hai, You", "Welcome", "hai"]

function FindMostRepeatedWords(data) {
    allWords = data.reduce((acc, cur) => {
        words = cur.split(',').map(x => x.trim());
        return [...acc, ...words];
    }, []);

    wordCountArr = [];
    allWords.forEach(function (val, index) {
        if (wordCountArr.length) {
            var ind = wordCountArr.findIndex(x => x.key === val);
            if (ind != -1)
                wordCountArr[ind]["count"] = parseInt(wordCountArr[ind].count + 1);
            else
                wordCountArr.push({ key: val, count: 1 });
        }
        else
            wordCountArr.push({ key: val, count: 1 });
    })
    return findRepeatedValue(wordCountArr)
}

function findRepeatedValue(wordCountArr) {
    let orginalArr = [...wordCountArr];
    wordCountArr.forEach(function (val, ind) {
        let tempIndex = wordCountArr.findIndex((x, i) => x.key.toLowerCase() === val.key.toLowerCase() && i != ind)
        if (tempIndex != -1) {
            if (wordCountArr[tempIndex].count > val.count) {
                val.key = wordCountArr[tempIndex].key;
            }
            val.count = wordCountArr[tempIndex].count + val.count;
            wordCountArr.splice(tempIndex, 1);
        }
    })
    let count = 0;
    let key = "";
    wordCountArr.forEach(function (val, index) {
        if (val.count > count) {
            count = val.count;
            key = val.key;
        }
    })
    return wordCountArr.filter(x => x.count == count);
}
