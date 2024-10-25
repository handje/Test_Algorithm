function solution(answers) {
  const fst = [1, 2, 3, 4, 5];
  const sec = [2, 1, 2, 3, 2, 4, 2, 5];
  const trd = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let fs = 0;
  let ss = 0;
  let ts = 0;

  for (let i = 0; i < answers.length; i++) {
    if (fst[i % 5] === answers[i]) fs++;
    if (sec[i % 8] === answers[i]) ss++;
    if (trd[i % 10] === answers[i]) ts++;
  }

  const maxScore = Math.max(fs, ss, ts);
  let answer = [];
  if (fs === maxScore) answer.push(1);
  if (ss === maxScore) answer.push(2);
  if (ts === maxScore) answer.push(3);
  return answer;
}