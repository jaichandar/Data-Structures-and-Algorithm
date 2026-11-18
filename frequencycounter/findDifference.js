const findDifference = (s, t) => {
    const hash = {};
    for (let i = 0; i < t.length; i++) {
        const value = t[i];

        if (value in hash) {
            hash[value]++;
        } else {
            hash[value] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        const value = s[i];

        if (value in hash) {
            hash[value]--
        }
    }

    for (let key in hash) {
        if (hash[key] > 0) {
            return key
        }
    }
}