def solution(arr):
    index = list(filter(lambda x: arr[x]==2,range(len(arr))))
    return arr[index[0]:index[-1]+1] if len(index)>0 else [-1]