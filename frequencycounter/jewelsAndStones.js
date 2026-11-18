const jewelsAndStone = (jewels, stones) => {
  const hash1 = {}

  for (let i = 0; i < stones.length; i++) {
    const value = stones[i];
    if (value in hash1) {
      hash1[value]++;
    } else {
      hash1[value] = 1;
    }
  }
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    const value = jewels[i];
    if (value in hash1) {
      count += hash1[value];
    }
  }
  return count;
}

const result = jewelsAndStone('aA', 'aAAbbbb');
console.log(result);