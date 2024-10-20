//한번에 하나만
//평균시간을 줄이기

//작업중에 들어온것은 걸리는 시간을 우선순위로

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  getMinOrMax() {
    return this.heap[0];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let curr = this.heap.length - 1;
    let parent = Math.floor((curr - 1) / 2);
    while (this.heap[parent] && this.heap[parent] > this.heap[curr]) {
      this.swap(curr, parent);
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }
  }
  getNum() {
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  remove(value) {
    const idx = this.heap.findIndex((el) => el === value);
    const last = this.heap.pop();
    if (last !== value) {
      this.heap[idx] = last;
      this.bubbleDown();
    }
  }
  bubbleDown() {
    let curr = 0;
    let left = curr * 2 + 1;
    let right = curr * 2 + 2;

    while (
      (this.heap[left] && this.heap[left] < this.heap[curr]) ||
      (this.heap[right] && this.heap[right] < this.heap[curr])
    ) {
      let smaller = left;
      if (this.heap[right] && this.heap[right] < this.heap[smaller]) {
        smaller = right;
      }
      this.swap(curr, smaller);
      curr = smaller;
      left = curr * 2 + 1;
      right = curr * 2 + 2;
    }
  }
}
class MaxHeap extends MinHeap {
  bubbleUp() {
    let curr = this.heap.length - 1;
    let parent = Math.floor((curr - 1) / 2);
    while (this.heap[parent] && this.heap[parent] < this.heap[curr]) {
      this.swap(curr, parent);
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }
  }
  bubbleDown() {
    let curr = 0;
    let left = curr * 2 + 1;
    let right = curr * 2 + 2;

    while (
      (this.heap[left] && this.heap[left] > this.heap[curr]) ||
      (this.heap[right] && this.heap[right] > this.heap[curr])
    ) {
      let bigger = left;
      if (this.heap[right] && this.heap[right] > this.heap[bigger]) {
        bigger = right;
      }
      this.swap(curr, bigger);
      curr = bigger;
      left = curr * 2 + 1;
      right = curr * 2 + 2;
    }
  }
}

function solution(operations) {
  let answer = [];
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();

  for (let o of operations) {
    const [op, n] = o.split(" ");
    if (op === "I") {
      const num = Number(n);
      minHeap.add(num);
      maxHeap.add(num);
    } else if (op === "D") {
      if (minHeap.size() === 0) {
        continue;
      }
      if (n === "1") {
        const maxNum = maxHeap.getNum();
        minHeap.remove(maxNum);
      } else if (n === "-1") {
        const minNum = minHeap.getNum();
        maxHeap.remove(minNum);
      }
    }
  }
    
if(minHeap.size()===0){
    return [0,0]
}else{
      return [maxHeap.getMinOrMax(), minHeap.getMinOrMax()];
}

}
