function solution(number, k) {
  const stack = [];
  let count = 0;
  const n = number.length;
  for (let i = 0; i < n; i++) {
    let curr = parseInt(number[i]);

    while (stack.length && stack[stack.length - 1] < curr && count < k) {
      stack.pop();
      count++;
    }
    stack.push(parseInt(number[i]));
  }

  while (count < k) {
    stack.pop();
    count++;
  }
  return stack.join("");
}