function solution(n) {
    let root = Math.sqrt(n);
    let floor = Math.floor(root);
    console.log("Math.sqrt(n) :", Math.sqrt(n));
    console.log("floor :", floor);
    if (root === floor) {
        return Math.pow(root + 1,2);
    }
    return -1;
}