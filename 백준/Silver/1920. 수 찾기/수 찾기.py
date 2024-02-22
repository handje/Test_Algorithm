n=int(input())  
arrN=set(map(int,input().split()))

m=int(input())  
arrM=list(map(int,input().split()))

for num in arrM:
    print(int(num in arrN))