#5
#8 3 7 9 2
#3
#5 7 9
#no yes yes
#알고리즘책

def binary_search(arr,target,start,end):
    while start<=end:
        mid=(start+end)//2
        if arr[mid]==target:
            return mid
        elif arr[mid]>target:
            end=mid-1
        else:
            start=mid+1
    return None

n=int(input())
arr=sorted(map(int,input().split()))

m=int(input())
order=list(map(int,input().split()))

for i in order:
    res=binary_search(arr,i,0,n-1)
    if res!=None:
        print('yes',end=' ')
    else:
        print('no',end=' ')