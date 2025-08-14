function solution(x, n) {
    let num = x;
    let arr = [num]; 
    for (let i = 0; i < n - 1; i++) {
        num += x;
        arr.push(num)
    }
    console.log("arr :",arr);
    return arr;
}