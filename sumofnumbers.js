const nums = [1, 2, 3, 4];

function sumFor(num) {
  let sum = 0;
  for (const number of num) {
    sum += number;
  }
  return sum;
}

console.log(sumFor(nums));

function sumWhile(num) {
  let sum = 0;
  let i = 0;
  while (i < num.length) {
    sum += num[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(nums));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumRecursion(nums));

function sumTheSimpleWay(num) {
  _.reduce(num, function (memo, i) { return memo + i; }, 0);
}

console.log(sumTheSimpleWay(nums));
