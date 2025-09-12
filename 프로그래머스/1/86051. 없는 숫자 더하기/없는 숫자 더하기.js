function solution(numbers) {
    let origin = [0,1,2,3,4,5,6,7,8,9];
    let missing = origin.filter(item => !numbers.includes(item));
    
    console.log(`missing : ${missing}`);
    let sum = 0; 
    for (let i = 0; i < missing.length; i++) {
        sum += missing[i];
    }
    return sum;
}