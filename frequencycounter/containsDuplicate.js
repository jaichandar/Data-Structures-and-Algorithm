const containDuplicates = (nums) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (value in hash) {
            hash[value]++;
        } else {
            hash[value] = 1;
        }
    }
    for (let key in hash) {
        if (hash[key] > 1) {
            return true
        }
    }
    return false;
}

const result = containDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(result);