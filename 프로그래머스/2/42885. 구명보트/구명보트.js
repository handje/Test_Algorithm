function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  while (people.length > 0) {
    let maxW = people[people.length - 1];
    let minW = people[0];
    if (maxW + minW > limit) {
      people.pop();
      count++;
    } else {
      people.shift();
      people.pop();
      count++;
    }
  }
  return count;
}

console.log(solution([70, 80, 50], 100));
