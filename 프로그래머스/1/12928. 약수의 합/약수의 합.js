function solution(n) {
    // 1,2,3,4,6,12
    
    let sum = 0;
    let i = 1
    while (i <= n) {
        if (n % i === 0) {
            // 약수
            sum += i;
        } 
        i++;
    }
    return sum;
}