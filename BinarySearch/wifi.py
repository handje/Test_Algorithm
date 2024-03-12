# 5 3
# 1
# 2
# 8
# 4
# 9

# 3
#백준2110
n,c=map(int,input().split())
wifi=[]
for i in range(n):
    wifi.append(int(input()))

wifi.sort()

start=1
end=wifi[-1]-wifi[0]
res=0

while start<=end:
    mid=(start+end)//2
    curr=wifi[0]
    count=1
    for i in range(1,n):
        if wifi[i]>=curr+mid:
            count+=1
            curr=wifi[i]
    if count>=c:
        if res<mid:
            res=mid
        start=mid+1
    else:
        end=mid-1
print(res)

#시간 초과 발생