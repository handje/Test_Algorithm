n=int(input())
num_list=list(map(int,input().split()))
sumWating=0

num_list.sort()

for i in range(len(num_list)):
    sumWating+=sum(num_list[:i+1])

print(sumWating)