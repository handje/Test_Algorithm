# 4 11
# 802
# 743
# 457
# 539

# 200
#백준1654
k,n=map(int,input().split())
lines=[]
for i in range(k):
    lines.append(int(input()))
lines.sort()

start=1
end=max(lines)
res=0

while start<=end:
    total=0
    mid=(start+end)//2
    for line in lines:
        total+=(line//mid)
    if total>=n:
        start=mid+1
    else:
        end=mid-1

print(end) #n개 이상을 만들 수 있는 최대길이를 출력
