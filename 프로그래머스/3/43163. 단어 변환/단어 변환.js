function solution(begin, target, words) {
  //한개차이 함수
  const find = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      const curr = a.charCodeAt(i); //문자열의 인덱스로 아스키코드 변환
      const next = b.charCodeAt(i);

      if (curr - next !== 0) diff++;
    }
    return diff === 1 ? true : false;
  };

  //한개차이 저장
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    const temp = [];
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      if (find(words[i], words[j])) {
        temp.push(words[j]);
      }
    }
    map.set(words[i], temp);
  }

  //begin도 포함하기(words에 없을 수 있음)
  const fromBegin = [];
  for (let i = 0; i < words.length; i++) {
    if (find(begin, words[i])) {
      fromBegin.push(words[i]);
    }
  }
  map.set(begin, fromBegin);

  //bfs
  const queue = [[begin, 0]];
  const visited = new Set();
  visited.add(begin);
  while (queue.length > 0) {
    const [curr, cnt] = queue.shift();
    if (curr === target) {
      return cnt;
    }
    for (let next of map.get(curr) || []) {
      if (!visited.has(next)) {
        queue.push([next, cnt + 1]);
        visited.add(next);
      }
    }
  }
  return 0;
}