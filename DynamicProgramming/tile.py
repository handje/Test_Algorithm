#알고리즘책
#타일을 채우는 모든 경우의 수(1x2, 2x1, 2x2)
#3 -> 5

n=int(input())
d=[0]*(n+1)
d[1]=1
d[2]=3

for i in range(3,n+1):
    d[i]=(d[i-2]*2+d[i-1])%796796

print(d[n])

# 1. 가로 길이 n 입력받기
# 2. 가로가 2가 남았을땐 2가지, 1이 남았을땐 1가지
