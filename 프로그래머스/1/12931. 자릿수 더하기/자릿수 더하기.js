function solution(n) {
    let digitArray = n.toString().split('');
    let sum = 0;
    for (let i = 0; i < digitArray.length; i++) {
        sum += Number(digitArray[i]);
    }

    return sum;
}

let n = 123;
solution(n)