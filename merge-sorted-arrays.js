const input1 = [1, 3];
const input2 = [1, 2, 3, 4];

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    const v1 = arr1[index1];
    const v2 = arr2[index2];

    // this can surely be simplified, but is readable (writable) for now :)

    if (index1 < arr1.length) { // left array is still full
      if (index2 === arr2.length) { // right array is empty
        result.push(v1);
        index1++;
      } else { // both are full - compare
        if (v1 < v2) {
          result.push(v1);
          index1++;
        } else {
          result.push(v2);
          index2++;
        }
      }
    } else { // left array is empty - take all from right
      result.push(v2);
      index2++;
    }
  }

  return result;
}

console.log(mergeSortedArrays(input1, input2));