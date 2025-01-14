def solution(people, limit):
    people.sort(reverse=True)
    count=0
    first=0
    last=len(people)-1
    
    while(first<last):
        if(people[first]+people[last]<=limit):
            first+=1
            last-=1
        else:
            first+=1
            
        count+=1
        
        if(first==last):
            count+=1
        
    return count