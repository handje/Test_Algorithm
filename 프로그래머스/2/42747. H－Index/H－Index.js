function solution(citations) {
  citations.sort((a, b) => a - b);
  let h = citations[citations.length - 1];

  while (h > 0) {
    let count = citations.filter((num) => num >= h).length;
    if (count && count >= h) return h;
    h -= 1;
  }
  return h;
}