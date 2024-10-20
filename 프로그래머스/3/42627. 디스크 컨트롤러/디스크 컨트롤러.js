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
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let curr = this.heap.length - 1;
    let parent = Math.floor((curr - 1) / 2);
    while (this.heap[parent] && this.heap[parent][1] > this.heap[curr][1]) {
      this.swap(curr, parent);
      curr = parent;
      parent = Math.floor((curr - 1) / 2);
    }
  }
  remove() {
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let curr = 0;
    let left = curr * 2 + 1;
    let right = curr * 2 + 2;

    while (
      (this.heap[left] && this.heap[left][1] < this.heap[curr][1]) ||
      (this.heap[right] && this.heap[right][1] < this.heap[curr][1])
    ) {
      let smaller = left;
      if (this.heap[right] && this.heap[right][1] < this.heap[smaller][1]) {
        smaller = right;
      }
      this.swap(curr, smaller);
      curr = smaller;
      left = curr * 2 + 1;
      right = curr * 2 + 2;
    }
  }
}

function solution(jobs) {
  //1. 요청시간순으로 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  //2. 작업시간 초기화
  const heap = new MinHeap();
  let currTime = 0; //작업이 끝난 시점
  let totalWaitTime = 0;
  let jobIdx = 0;
  let completed = 0;

  while (completed < jobs.length) {
    //3. 현재 시간에 처리할 수 있는 작업을 heap에 넣기
    while (jobIdx < jobs.length && jobs[jobIdx][0] <= currTime) {
      heap.add(jobs[jobIdx]);
      jobIdx++;
    }

    //4. heap에서 가장 짧은 작업 선택
    if (heap.size() > 0) {
      const [start, duration] = heap.remove();
      currTime += duration;
      totalWaitTime += currTime - start; //끝난시간-요청시간=걸린시간
      completed++;
    } else {
      currTime = jobs[jobIdx][0]; // 수행중인것도, 처리 가능한것도 없을때에는 다음 요청시점으로 점프
    }
  }

  return Math.floor(totalWaitTime / jobs.length);
}
