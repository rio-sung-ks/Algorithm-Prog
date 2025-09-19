function solution(s) {
    // let arr = s.split('');
    let arr = Array.from(s);
    
    if (arr.length % 2 === 0) {
        // 짝수 가운데 두글자
        let firstMid = arr.length / 2 - 1;
        let secondMid = arr.length / 2 ;
        console.log(`firstMid : ${arr[firstMid]}`);
        console.log(`secondMid : ${arr[secondMid]}`);
        return arr[firstMid] + arr[secondMid];
    } else {
        // 홀수
        let mid = Math.trunc(arr.length / 2)
        console.log(`mid : ${arr[mid]}`);
        return arr[mid];
    }

}