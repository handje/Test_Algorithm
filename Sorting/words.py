#백준1181

n=int(input())
alp_list=set()

for i in range(n):
    alp=input()
    alp_list.add((alp,len(alp)))

alp_list=sorted(list(alp_list),key=lambda x:(x[1],x[0]))

for alp in alp_list:
    print(alp[0])

# 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

# 길이가 짧은 것부터
# 길이가 같으면 사전 순으로
# 단, 중복된 단어는 하나만 남기고 제거해야 한다.