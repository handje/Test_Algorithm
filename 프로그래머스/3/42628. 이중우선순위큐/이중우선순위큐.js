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
  delete(v) {
    const idx = this.heap.findIndex((e) => e === v);
    if (idx === -1) return;
    if (idx === this.heap.length - 1) {
      return this.heap.pop();
    }
    this.heap[idx] = this.heap.pop();
    this.bubbleDown();
  }
}
class MaxHeap {
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

    while (this.heap[parIdx] && this.heap[currIdx] > this.heap[parIdx]) {
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
      (this.heap[leftIdx] && this.heap[leftIdx] > this.heap[currIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[currIdx])
    ) {
      let maxIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[leftIdx]) {
        maxIdx = rightIdx;
      }
      this.swap(currIdx, maxIdx);
      currIdx = maxIdx;
      leftIdx = currIdx * 2 + 1;
      rightIdx = currIdx * 2 + 2;
    }
  }
  delete(v) {
    const idx = this.heap.findIndex((e) => e === v);
    if (idx === -1) return;
    if (idx === this.heap.length - 1) {
      return this.heap.pop();
    }
    this.heap[idx] = this.heap.pop();
    this.bubbleDown();
  }
}

function solution(operations) {
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  for (let op of operations) {
    const temp = op.split(" ");
    const num = parseInt(temp[1]);
    if (temp[0] === "I") {
      minHeap.push(num);
      maxHeap.push(num);
    } else {
      if (minHeap.size() === 0) {
        continue;
      }
      if (num === 1) {
        const maxNum = maxHeap.pop();
        minHeap.delete(maxNum);
      } else {
        const minNum = minHeap.pop();
        maxHeap.delete(minNum);
      }
    }
  }

  return minHeap.size() === 0 ? [0, 0] : [maxHeap.pop(), minHeap.pop()];
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
