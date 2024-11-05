function solution(n) {
    let count = 0;

    function canPlace(queens, row, col) {
        for (let i = 0; i < row; i++) {
            // 열이 같은지 또는 대각선에 위치하는지 확인
            if (queens[i] === col || Math.abs(queens[i] - col) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }

    function placeQueens(queens, row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (canPlace(queens, row, col)) {
                queens[row] = col; // 퀸 배치
                placeQueens(queens, row + 1); // 다음 행으로 이동
                queens[row] = -1; // 백트래킹
            }
        }
    }

    placeQueens(new Array(n).fill(-1), 0);
    return count;
}
