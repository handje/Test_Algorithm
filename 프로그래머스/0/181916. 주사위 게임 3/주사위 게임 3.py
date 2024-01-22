def solution(a, b, c, d):
    answer = 0
    count={}
    
    for i in [a,b,c,d]:
        if(i not in count):
            count[i]=1
            continue
        count[i]+=1

    if(len(count)==1):return 1111*a
    
    c_list=list(count.keys())
    if(len(count)==2):
        if(count[c_list[0]]==2):
            return sum(c_list)*abs(c_list[0]-c_list[1])
        else:
            if(count[c_list[0]]==3):
                p=c_list[0]
                q=c_list[1]
            else:
                p=c_list[1]
                q=c_list[0]
            return (10*p+q)**2
    elif(len(count)==3):
        res=[]
        for key in list(count.keys()):
            if(count[key]==1):res.append(key)
        return res[0]*res[1]
    else:return min(c_list)
    return answer