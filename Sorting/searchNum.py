#백준1920
n=int(input())  
arrN=set(map(int,input().split()))

m=int(input())  
arrM=list(map(int,input().split()))

for num in arrM:
    print(int(num in arrN))

#a in set 이 a in list 보다 시간복잡도가 빠름(O(1))