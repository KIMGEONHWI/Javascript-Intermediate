const nums = [3, 10, 1, 6, 4];

const minNum = Math.min.apply(null, nums); // 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용
const maxNum = Math.max.apply(null, nums);

// const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])

// const maxNum = Math.max.call(null, ...nums);
// = Math.max.apply(null, 3, 10, 1, 6, 4)
console.log(minNum); // 1
console.log(maxNum); // 10