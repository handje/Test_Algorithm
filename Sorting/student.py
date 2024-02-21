#'이것이 코딩 테스트다'
# 성적이 낮은 순서로 학생 출력
n=int(input())
students=[]

try:
    for i in range(n):
        name,score=input().split()
        students.append((name,score))
    
    res=sorted(students,key=lambda k:k[1])
    
    for student in res:
        print(student[0],end=" ")

except:
    print("error")

# 1. 튜플로 저장
# 2. key 함수를 지정하여 정렬