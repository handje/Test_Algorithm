def solution(rank, attendance):
    rank_num=[]
    
    for i in range(len(rank)):
        if(len(rank_num)==3):break
        num=rank.index(i+1)
        if(attendance[num]):rank_num.append(num)
        
    return 10000*rank_num[0]+100*rank_num[1]+rank_num[2]