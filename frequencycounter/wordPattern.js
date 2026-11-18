const wordPattern = () => {
    const str = s.split(' ');
    if (pattern.length !== str.length) return false;
    const patternMap = new Map();
    const wordMap = new Map();
    for (let i = 0; i < pattern.length; i++) {
        const pat = pattern[i];
        const word = str[i];
        if (patternMap.has(pat) && patternMap.get(pat) !== word) {
            return false;
        }
        if (wordMap.has(word) && wordMap.get(word) !== pat) {
            return false;
        }
        patternMap.set(pat, word);
        wordMap.set(word, pat);
    }
    return true;
}