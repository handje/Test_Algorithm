function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);  // 끝 지점을 기준으로 오름차순 정렬

  let cameraCount = 0;
  let lastCameraPosition = -30001;     // 초기 카메라 위치를 최솟값으로 설정

  for (const [start, end] of routes) {
    if (lastCameraPosition < start) {
      // 현재 카메라가 해당 차량 구간을 커버하지 않으면, 새로운 카메라 설치
      cameraCount++;
      lastCameraPosition = end;  // 새로운 카메라를 현재 차량의 끝 지점에 설치
    }
  }

  return cameraCount;
}
