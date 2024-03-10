n=int(input())
arr=sorted(list(map(int,input().split())))

num={}
for a in arr:
    if a in num:
        num[a]+=1
    else:
        num[a]=1

m=int(input())
card=list(map(int,input().split()))

for c in card:
    if c in num:
        print(num[c],end=' ')
    else:
        print(0,end=' ')