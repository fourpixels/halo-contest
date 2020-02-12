const input = 'abcabcbb';

function longestSubstring(str) {
  if (!str)
    return 0;

  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const map = [str[i]];
    let index = i + 1; // search from next index
    while (index < str.length && !map.includes(str[index])) { // surely not the best approach, works for now :)
      map.push(str[index]);
      index++;
    }
    if (map.length > max) {
      max = map.length;
    }
  }
  
  return max;
}

console.log(longestSubstring(input));