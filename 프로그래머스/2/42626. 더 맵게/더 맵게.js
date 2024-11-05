class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  push(v) {
    this.heap.push(v);
    this.bubbleUp();
  }
  bubbleUp() {
    let currIdx = this.heap.length - 1;
    let parIdx = Math.floor((currIdx - 1) / 2);

    while (this.heap[parIdx] && this.heap[currIdx] < this.heap[parIdx]) {
      this.swap(currIdx, parIdx);
      currIdx = parIdx;
      parIdx = Math.floor((currIdx - 1) / 2);
    }
  }
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let currIdx = 0;
    let leftIdx = currIdx * 2 + 1;
    let rightIdx = currIdx * 2 + 2;
    const last = this.heap.length - 1;
    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[currIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[currIdx])
    ) {
      let minIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[leftIdx]) {
        minIdx = rightIdx;
      }
      this.swap(currIdx, minIdx);
      currIdx = minIdx;
      leftIdx = currIdx * 2 + 1;
      rightIdx = currIdx * 2 + 2;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  for (const s of scoville) {
    heap.push(s);
  }
  let count = 0;
  while (heap.size() >= 2) {
    if (heap.peek() >= K) return count;
    const fst = heap.pop();
    const sec = heap.pop();
    heap.push(fst + sec * 2);
    count++;
  }
  if (heap.peek() >= K) {
    return count;
  }
  return -1;
}

console.log(solution([1, 12, 3, 9, 2, 10], 7));
