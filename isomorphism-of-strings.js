const input1 = 'egog';
const input2 = 'fogo';

function areStringsIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1.charAt(i);
    const char2 = str2.charAt(i);

    if (map1[char1] !== map2[char2]) {
      return false;
    } else {
      map1[char1] = i;
      map2[char2] = i;
    }
  }

  return true;
}

console.log(areStringsIsomorphic(input1, input2));