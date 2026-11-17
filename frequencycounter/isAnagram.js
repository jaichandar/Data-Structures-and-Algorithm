const isAnagram = (s, t) => {
    const hash1 = {};
    const hash2 = {};

    s = sanitize(s);
    t = sanitize(t);

    for (let i = 0; i < s.length; i++) {
        const value = s[i].toLowerCase();

        if (value in hash1) {
            hash1[value]++;
        } else {
            hash1[value] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        const value = t[j].toLowerCase();

        if (value in hash2) {
            hash2[value]++;
        } else {
            hash2[value] = 1;
        }
    }

    const hash1Keys = Object.keys(hash1);
    const hash2Keys = Object.keys(hash2);

    if (hash1Keys.length !== hash2Keys.length) {
        return false;
    }

    for (let key in hash1) {
        if (hash1[key] !== hash2[key]) {
            return false;
        }
    }
    return true;
}

const sanitize = (str) => {
    return str.split(' ').join('');
}

const result = isAnagram('dormintory', 'dirty room');
console.log(result);