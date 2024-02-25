# 정렬 알고리즘

## Selection Sort(선택 정렬)

> 제일 작은 데이터를 앞으로
![1](https://github.com/handje/Test_Algorithm/assets/57988006/38aada1a-39ca-40b9-a647-c83ff14bd3d8)


1. i=0
2. i=1 to n-1 중에 최솟값 찾기
3. swap(array[i],array[minIndex])
4. N-1번 반복

=> O(N\*\*2)

## Insertion Sort(삽입 정렬)

> 데이터를 비교해서 적절한 위치에 넣기
![2](https://github.com/handje/Test_Algorithm/assets/57988006/30dfaa60-4531-4b38-b855-06666181781d)


1. 2번째부터 시작
2. 자신보다 작은 데이터를 만날때까지 index-1

=> O(N\*\*2), 거의 정렬되어있다면 O(N)

```py
for i in range(1,n):
   for j in range(i,0,-1):
       if array[j]<array[j-1]:
           array[j],array[j-1]=array[j-1],array[j]
       else:
           break
```

## Quick Sort(퀵 정렬)

> 기준데이터(pivot)를 정하고 큰 수와 작은 수를 교환하여 리스트를 쪼개면서 정렬
![3](https://github.com/handje/Test_Algorithm/assets/57988006/d47770fb-94ac-4ebd-86cf-84a462717276)


(Hoare Partition)

1. pivot=array[0]
2. 왼쪽부터(L) pivot보다 큰 수를 찾고, 오른쪽부터는(R) pivot보다 작은 수를 찾는다
3. 두 수를 swap
4. L과 R이 교차되면 작은수와 pivot을 swap
5. 기존 pivot를 기준으로 리스트 쪼개고 각각 1~4반복
6. 리스트안에 요소가 1개가 되면 break

=> O(NlogN), 이미 정렬되어 있다면 O(N\*\*2)

```py
def quick_sort(array,start,end):
   if start>=end: #원소가 한개인 경우
       return
   pivot=start
   left=start+1
   right=end
   while left<=right:
       while left<=end and array[left]<=array[pivot]: #왼쪽부터 pivot보다 큰 데이터 찾기
           left+=1
       while right>start and array[right]>=array[pivot]:#오른쪽부터 pivot보다 작은 데이터 찾기
           right-=1
       if left>right:
           array[right],array[pivot]=array[pivot],array[right]
       else:
           array[right],array[left]=array[left],array[right]
   #분할 이후 나눠서 각각 수행
   quick_sort(array,start,right-1)
   quick_sort(array,right+1,end)

quick_sort(array,0,n-1)
```

## Count Sort(개수 정렬)

> 데이터 크기 범위가 제한되어 정수로 표현 가능할때만 사용 가능한 정렬방법(약 1,000,000이하, 동일한 데이터가 많은 성적 관련 데이터정렬에 유리)
![4](https://github.com/handje/Test_Algorithm/assets/57988006/1e7f38b8-c5b9-4742-a3a9-04c4cd81b2e8)


1. 배열의 최댓값+1 크기의 배열을 0으로 초기화
2. 배열값을 인덱스로 하는 값증가
3. 출력 : 첫번째 인덱스부터 각 값만큼 인덱스를 출력

=> O(N+K) , K는 최댓값
