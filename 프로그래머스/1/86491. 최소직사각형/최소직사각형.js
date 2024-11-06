function solution(sizes) {
  sizes.map((size) => size.sort((a, b) => a - b));
  let row = 0;
  let col = 0;

  for (let [x, y] of sizes) {
    if (x > row) row = x;
    if (y > col) col = y;
  }

  return row * col;
}