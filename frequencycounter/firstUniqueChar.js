const firstUniqueChar = (s) => {
    const hash = {};

    for (let i = 0; i < s.length; i++) {
        const value = s[i];

        if (value in hash) {
            hash[value]++;
        } else {
            hash[value] = 1;
        }
    }

    let resultKey;

    for (let key in hash) {
        if (hash[key] === 1) {
            resultKey = key;
            break;
        }
    }

    return s.indexOf(resultKey);
}

const result = firstUniqueChar('leetcode');
console.log(result);