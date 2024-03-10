# 이진 탐색 알고리즘

## 순차탐색

앞에서부터 하나씩 차례로 탐색

## 이진탐색

- 반으로 쪼개면서 탐색
- 정렬이 되어있어야 가능
- start, end , mid((star+end)/2)
- 찾으려는 값과 mid를 비교
  1. mid가 더 크다면 오른쪽은 버림
  2. mid가 더 작다면 왼쪽은 버림
- O(logN)
- 구현 방법

  1. 재귀

  ```py
    def binary_search(array,target,start,end):
        if start>end:
            return None
        mid=(start+end)//2

        if array[mid]==target:
            return mid

        #중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
        elif array[mid]>target:
            return binary_search(array,target,start,mid-1)
        #중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
        else:
            return binary_search(array,target,mid+1,end)
    #...

    res=binary_search(array,target,0,n-1)
  ```

  2. 반복문

  ```py
    def binary_search(array,target,start,end):
        while start <=end:
            mid=(start+end)//2
            if array[mid]==target:
                return mid
            elif array[mid]>target:
                end=mid-1
            else:
                start=mid+1
        return None
  ```

## 이진탐색 트리

- 트리
  - 계층 데이터에 적합한 자료 구조
  - DB에 사용됨
  - 일부만 따로 봐도 트리 구조
  - 루트노드, 단말노드
- 이진탐색 트리
  - 왼쪽 자식 노드 < 부모 노드 < 오른쪽 자식 노드
