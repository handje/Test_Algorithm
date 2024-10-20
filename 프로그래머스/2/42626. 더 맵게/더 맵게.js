class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);
    while (this.heap[parentIdx] && this.heap[parentIdx] > this.heap[currIdx]) {
      this.swap(parentIdx, currIdx);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  remove() {
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
    let lIdx = currIdx * 2 + 1;
    let rIdx = currIdx * 2 + 2;

    while (
      (this.heap[lIdx] && this.heap[lIdx] < this.heap[currIdx]) ||
      (this.heap[rIdx] && this.heap[rIdx] < this.heap[currIdx])
    ) {
      let smallerIdx = lIdx;
      if (this.heap[rIdx] && this.heap[rIdx] < this.heap[smallerIdx]) {
        smallerIdx = rIdx;
      }
      this.swap(currIdx, smallerIdx);
      currIdx = smallerIdx;
      lIdx = currIdx * 2 + 1;
      rIdx = currIdx * 2 + 2;
    }
  }
}

function solution(scoville, K) {
  let answer = 0;
  const heap = new MinHeap();

  for (let s of scoville) {
    heap.add(s);
  }

  while (heap.size() >= 2) {
    const first = heap.remove();
    if (first >= K) {
      return answer;
    }
    const second = heap.remove();
    const mixed = first + second * 2;
    heap.add(mixed);
    answer++;
  }

  if (heap.remove() >= K) {
    return answer;
  } else {
    return -1;
  }
}