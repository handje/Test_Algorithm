function solution(answers) {
  const answer = [];
  const correct = [0, 0, 0];
  const way = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < way.length; j++) {
      const arr = way[j];
      if (arr[i % arr.length] === answers[i]) {
        correct[j]++;
      }
    }
  }

  const maxNum = Math.max(...correct);

  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === maxNum) answer.push(i + 1);
  }
  return answer;
}