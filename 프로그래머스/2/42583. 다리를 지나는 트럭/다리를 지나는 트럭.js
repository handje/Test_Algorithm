function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0); // 다리를 모방한 큐
  let bridgeWeight = 0;

  while (bridge.length > 0) {
    time++;
    bridgeWeight -= bridge.shift(); // 트럭이 다리에서 나가면서 무게 감소

    if (truck_weights.length > 0) {
      if (bridgeWeight + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        bridge.push(truck);
        bridgeWeight += truck;
      } else {
        bridge.push(0); // 다음 트럭이 올라올 수 없으면 빈 공간 추가
      }
    }
  }

  return time;
}
