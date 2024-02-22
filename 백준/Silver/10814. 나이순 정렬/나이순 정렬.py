n=int(input())  
members=[]

for i in range(n):
    age,name=input().split()
    members.append([int(age),name,i])

for m in sorted(members,key=lambda m:(m[0],m[2])):
    print(m[0],m[1])