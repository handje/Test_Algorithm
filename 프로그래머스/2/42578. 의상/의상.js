function solution(clothes) {
  const map = new Map();
  for (let [name, cate] of clothes) {
    if (map.has(cate)) {
      map.set(cate, [...map.get(cate), name]);
    } else {
      map.set(cate, [name]);
    }
  }

  let count = 1;
  for (let value of map.values()) {
    count *= value.length + 1;
  }

  return count - 1;
}