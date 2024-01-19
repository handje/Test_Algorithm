from math import prod

def solution(num_list):
    return int(sum(num_list)**2>prod(num_list))