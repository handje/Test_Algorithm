function solution(people, limit) {
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  let count = 0;
  while (l <= r) {
    if (l === r) {
      count++;
      break;
    }
    if (people[l] + people[r] <= limit) {
      l++;
      r--;
    } else {
      r--;
    }
    count++;
  }
  return count;
}