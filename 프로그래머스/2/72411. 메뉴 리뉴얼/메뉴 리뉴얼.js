function solution(orders, course) {
  const answer = [];

  // 조합 생성 함수
  const getCombinations = (arr, len) => {
    if (len === 1) return arr.map((v) => [v]);
    const result = [];
    arr.forEach((fixed, i) => {
      const rest = arr.slice(i + 1);
      const combis = getCombinations(rest, len - 1);
      combis.forEach((combi) => {
        result.push([fixed, ...combi]);
      });
    });
    return result;
  };

  // 각 코스 길이에 대해 반복
  course.forEach((len) => {
    const counter = {};
    orders.forEach((order) => {
      const sorted = order.split('').sort();
      const combis = getCombinations(sorted, len);
      combis.forEach((combi) => {
        const key = combi.join('');
        counter[key] = (counter[key] || 0) + 1;
      });
    });

    /* 1단계 ─ 최댓값(maxCount) 구하기 */
    let maxCount = 0;
    for (const count of Object.values(counter)) {
      if (count >= 2 && count > maxCount) {
        maxCount = count; // 2번 이상 등장한 조합 가운데 가장 큰 빈도
      }
    }

    /* 2단계 ─ maxCount와 같은 조합을 모으기 */
    for (const [combo, cnt] of Object.entries(counter)) {
      if (cnt === maxCount && cnt >= 2) {
        answer.push(combo); // 조건에 맞는 조합을 결과 배열에 추가
      }
    }
  });

  return answer.sort();
}