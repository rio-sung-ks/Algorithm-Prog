function solution(num) {
    let count = 0
     if (num === 1) return 0;
    for (let i = 0; i <= 500; i ++) {
        if (num%2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        console.log("num :", num);
        count++;
        if (num === 1) return count;
    }
    return -1;
}