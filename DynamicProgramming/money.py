#알고리즘책
#화폐들을 최소한 이용하여 합이 m이 되도록
#2 15
#2
#3
#=>5

n,m=map(int,input().split())
money=[]
for i in range(n):
    money.append(int(input()))

d=[10001]*(m+1)
d[0]=0

for k in money:
    for j in range(k,m+1):
        d[j]=min(d[j-k]+1,d[j])
        
print(d[m])

# 1. n개의 화폐 단위, m을 만들기
# 2. 2가지 경우
# - d[i-n[x]]가 존재하면, min(d[i-n[x]]+1,d[i])
# - d[i-n[x]]가 존재하지 않으면, d[i]= 범위 밖의 값