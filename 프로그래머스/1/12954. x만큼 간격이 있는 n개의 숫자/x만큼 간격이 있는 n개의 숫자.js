function solution(x, n) {
    return Array(n).fill(x).map((e,l) => e*(l+1));
}