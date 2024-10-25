function solution(sizes) {
  for (let size of sizes) {
    size.sort((a, b) => a - b);
  }
  console.log(sizes);
  let [w, h] = [0, 0];
  for (let size of sizes) {
    if (w < size[0]) {
      w = size[0];
    }
    if (h < size[1]) {
      h = size[1];
    }
  }
  return w * h;
}