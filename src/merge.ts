function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  if (collection1) {
    const len = collection1.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (collection1[j] > collection1[j + 1]) {
          // swap
          const temp = collection1[j];
          collection1[j] = collection1[j + 1];
          collection1[j + 1] = temp;
        }
      }
    }
  }
  if (collection2) {
    const len = collection2.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (collection2[j] > collection2[j + 1]) {
          // swap
          const temp = collection2[j];
          collection2[j] = collection2[j + 1];
          collection2[j + 1] = temp;
        }
      }
    }
  }
  if (collection3) {
    const len = collection3.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (collection3[j] < collection3[j + 1]) {
          // swap
          const temp = collection3[j];
          collection3[j] = collection3[j + 1];
          collection3[j + 1] = temp;
        }
      }
    }
  }
  return [...collection1, ...collection2, ...collection3];
}

const collection1 = [7, 3, 5];
const collection2 = [2, 10, 6];
const collection3 = [1, 4, 2];

const result = merge(collection1, collection2, collection3);

console.log("collection1:", collection1);
console.log("collection2:", collection2);
console.log("collection3:", collection3);
