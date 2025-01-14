function solution(people, limit) {
  people.sort((a, b) => b - a);
  console.log(people);
  let first = 0;
  let last = people.length - 1;
  let count = 0;
  while (first < last) {
    if (people[first] + people[last] <= limit) {
      first += 1;
      last -= 1;
    } else {
      first += 1;
    }
    count++;
    if (first === last) count++;
  }
  return count;
}