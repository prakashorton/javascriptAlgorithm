// A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}

// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]

// o(n3)
const symDiffernceOfTwo = (arr1, arr2) => {
  const output = [];
  for (let ele of arr1) {
    if (!output.includes(ele) && !arr2.includes(ele)) output.push(ele);
  }

  for (let ele of arr2) {
    if (!output.includes(ele) && !arr1.includes(ele)) output.push(ele);
  }
  return output;
};

function sym(args) {
  const myInput = Array.from(arguments);
  const result = myInput.reduce((acc, current) => {
    console.log(acc, current);
    return symDiffernceOfTwo(acc, current);
  }, []);
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5, 6, 7]);

// Output = [6,7]

// o(n2)
var symDiffernceOfTwo = (arr1, arr2) => {
  const output = [];
  const uniqueItems1 = new Set(arr1);
  const uniqueItems2 = new Set(arr2);
  const allItems = [...uniqueItems1, ...uniqueItems2];
  const eleObj = {};
  allItems.forEach((it) => {
    if (it in eleObj) {
      eleObj[it]++;
    } else eleObj[it] = 1;
  });
  for (let ele in eleObj) {
    if (eleObj[ele] === 1) output.push(ele);
  }
  return output;
};

function sym(args) {
  const myInput = Array.from(arguments);
  const result = myInput.reduce((acc, current) => {
    console.log(acc, current);
    return symDiffernceOfTwo(acc, current);
  }, []);
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4], [3, 4, 5, 6, 7]);
// Output = [6,7]
