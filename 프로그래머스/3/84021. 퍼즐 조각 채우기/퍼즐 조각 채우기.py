def solution(game_board, table):
    def finding(mat, num):
        arr = []
        visited = [[0]*n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                if mat[i][j] != num or visited[i][j]:
                    continue

                Q = [[i, j]]
                visited[i][j] = 1
                k = 0
                while k < len(Q):
                    r, c = Q[k]
                    for d in range(4):
                        nr, nc = r + dr[d], c + dc[d]
                        if 0 <= nr < n and 0 <= nc < n:
                            if not visited[nr][nc] and mat[nr][nc] == num:
                                Q.append([nr, nc])
                                visited[nr][nc] = 1
                    k += 1

                arr.append(Q)
        return arr

    def hashing(group):
        min_r, min_c = 50, 50
        for r, c in group:
            min_r = min(min_r, r)
            min_c = min(min_c, c)

        for i in range(len(group)):
            group[i][0] -= min_r
            group[i][1] -= min_c

        group.sort()

        arr = []
        for r, c in group:
            arr.append(str(r))
            arr.append(str(c))

        return ''.join(arr)

    def rotate(shape):
        for i in range(len(shape)):
            r, c = shape[i]
            shape[i] = [c, -r]

    n = len(game_board)
    dr, dc = [0, 0, 1, -1], [1, -1, 0, 0]
    answer = 0

    block = finding(table, 1)
    blank = finding(game_board, 0)

    for i in range(len(block)):
        block[i] = hashing(block[i])

    temp = dict()
    for i in block:
        temp[i] = temp.get(i, 0) + 1
    block = temp

    for i in range(len(blank)):
        for _ in range(4):
            rotate(blank[i])
            hash_blank = hashing(blank[i])
            if block.get(hash_blank):
                block[hash_blank] -= 1

                answer += len(hash_blank)//2
                break

    return answer

#출처https://velog.io/@hyg8702/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%8D%BC%EC%A6%90-%EC%A1%B0%EA%B0%81-%EC%B1%84%EC%9A%B0%EA%B8%B0-python%ED%8C%8C%EC%9D%B4%EC%8D%AC