n=int(input())
cards=sorted(map(int,input().split()))

m=int(input())
nums=list(map(int,input().split()))

def binary(start,end,target,arr):
    while start<=end:
        mid=(start+end)//2
        if arr[mid]==target:
            return 1
        elif arr[mid]>target:
            end=mid-1
        else:
            start=mid+1
    return 0

for num in nums:
    print(binary(0,n-1,num,cards),end=' ')
