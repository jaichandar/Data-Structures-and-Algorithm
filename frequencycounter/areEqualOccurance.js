const areEqualOccurance = (s) => {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
        const value = s[i];

        if (value in hash) {
            hash[value]++;
        } else {
            hash[value] = 1;
        }
    }
    let values = [];

    for (let key in hash) {
        values.push(hash[key]);
    }

    let j = values[0];

    for (let i = 0; i < values.length; i++) {
        if (values[i] !== j) {
            return false;
        }
    }
    return true;
}

const result = areEqualOccurance('abcabc');
console.log(result);
