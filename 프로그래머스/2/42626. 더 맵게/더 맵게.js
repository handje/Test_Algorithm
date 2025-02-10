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
    let answer = 0;
    const heap=new MinHeap();
    
    for(let i=0;i<scoville.length;i++){
        heap.push(scoville[i]);
    }

    while(heap.size()>1){
        const first=heap.pop();
        if(first>=K)break;
        const second=heap.pop();
        heap.push(first+second*2);
        answer++
        
    }
    if(heap.pop()<K)return -1
    return answer;
}