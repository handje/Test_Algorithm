//배열을 자르고, 정렬하고, k번째수를 리턴
//100이하니까 내장함수

function solution(array, commands) {
  const answer = [];
  for (let command of commands) {
    const [i, j, k] = command;
    const temp = array.slice(i - 1, j);
    temp.sort((a, b) => a - b);
    answer.push(temp[k - 1]);
  }
  return answer;
}