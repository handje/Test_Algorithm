#알고리즘책
#5,3,2로 나누거나 1을 뺀다
#26 -> 3

x=int(input())
d=[0]*(x+1)

for i in range(2,x+1):
    d[i]=d[i-1]+1
    if i%2==0:
        d[i]=min(d[i],d[i//2]+1)
    if i%3==0:
        d[i]=min(d[i],d[i//3]+1)
    if i%5==0:
        d[i]=min(d[i],d[i//5]+1)
    
print(d[x])

# x입력받기
# 모든 경우 중 가장 작은 수를 저장
# 1. 1을 뺀다
# 2. 5로 나눈 index의 값 +1
# 3. 3으로 나눈 index의 값 +1
# 4. 2로 나눈 index의 값 + 1
# 마지막 요소 출력
