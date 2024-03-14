#알고리즘 책
#인접하지 않은 구역만을 선택해서 최댓값

#4
#1 3 1 5
# -> 8

n=int(input())
foods=list(map(int,input().split()))
d=[0]*n
d[0]=foods[0]
d[1]=max(d[0],foods[1])

for i in range(2,n):
    d[i]=max(d[i-1],d[i-2]+foods[i])

print(d[n-1])
# 1. 입력받기: n(식량 창고), k개의 식량 개수
# 2. 두가지 경우 중, 더 큰 수를 결정
# - i-2와 본인을 선택
# - i-1을 선택
# 3. 마지막 값 출력