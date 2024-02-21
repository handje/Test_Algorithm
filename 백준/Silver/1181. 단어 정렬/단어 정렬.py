n=int(input())
alp_list=set()

for i in range(n):
    alp=input()
    alp_list.add((alp,len(alp)))

alp_list=sorted(list(alp_list),key=lambda x:(x[1],x[0]))

for alp in alp_list:
    print(alp[0])
