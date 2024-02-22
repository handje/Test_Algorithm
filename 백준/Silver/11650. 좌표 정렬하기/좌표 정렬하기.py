n=int(input())
points=[]
for i in range(n):
    point=tuple(map(int,input().split()))
    points.append(point)

points.sort(key=lambda x:(x[0],x[1]))

for p in points:
    print(f'{p[0]} {p[1]}')