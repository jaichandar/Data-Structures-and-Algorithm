const isMorphicString = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const str1Map = new Map();
    const str2Map = new Map();
    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];
        if (str1Map.has(char1) && str1Map.get(char1) !== char2) {
            return false;
        }
        if (str2Map.has(char2) && str2Map.get(char2) !== char1) {
            return false;
        }
        str1Map.set(char1, char2);
        str2Map.set(char2, char1);
    }
    return true;
}

const result = isMorphicString('egg', 'add');
console.log(result);