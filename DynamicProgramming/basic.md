# Dynamic Programming (동적 계획법)

=> 기억하며 풀기

## 조건

1. 큰 문제는 작은 문제로 나눌 수 있다, Overlapping Subproblems(겹치는 부분 문제)
2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 동일하다, Optimal Substructure(최적 부분 구조)

## 피보나치 수열

재귀로 구현할 경우, 동일한 연산을 반복하기 때문에 효율이 떨어짐
=> 동일한 연산을 저장하여 다음 연산에 사용

## 구현방식

1. Bottom-Up (Tabulation 방식) - 반복문 사용, 상향식, 작은문제부터 답을 도출

```py
    d=[0]*100

    #초기화
    d[1]=1
    d[2]=2
    n=99

    for i in range(3,n+1):
        d[i]=d[i-1]+d[i-2] #피보나치수열 점화식

    print(d[n])
```

2. Top-Down (Memoization 방식) - 재귀 사용, 하향식, 큰문제를 위해 작은 문제 호출

```py
    d=[0]*100 #memoization을 위한 리스트 초기화

    def fibo(x):
        if x==1 or x==2:
            return 1
        if d[x]!=0: #이미 계산한 적 있다면
            return d[x]
        d[x]=fibo(x-1)+fibo(x-2) #피보나치수열의 점화식
        return d[x]

    print(fibo(99)) #큰수부터
```
