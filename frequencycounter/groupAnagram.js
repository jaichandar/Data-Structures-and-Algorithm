const groupAnagram = (strs) => {
  const sorted = strs.map((val) => val.split('').sort().join(''));
  const map = {};
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] in map) {
      map[sorted[i]].push(strs[i]);
    } else {
      map[sorted[i]] = [strs[i]];
    }
  }
  return Object.values(map);
}
