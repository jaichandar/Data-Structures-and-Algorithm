const majorityElements = (nums) => {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        if (value in hash) {
            hash[value]++;
        } else {
            hash[value] = 1;
        }
    }

    let max = 0;
    let maxValue = 0;

    for (let key in hash) {
        if (hash[key] > max) {
            max = hash[key];
            maxValue = key
        }
    }
    return maxValue;
}

const result = majorityElements([2,2,1,1,1,1,1,1,1,2,2]);
console.log(result);