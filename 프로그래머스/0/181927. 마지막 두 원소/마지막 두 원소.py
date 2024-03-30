def solution(num_list):
    last=num_list[-1]
    pre=num_list[-2]

    if(last>pre): num_list.append(last-pre)
    else: num_list.append(last*2)
    
    return num_list
