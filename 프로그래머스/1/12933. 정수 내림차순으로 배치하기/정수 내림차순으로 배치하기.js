function solution(n) {
    let str = n.toString().split('');
    console.log(`str : ${str}`);
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]));
    }
    arr.sort().reverse();
    console.log(`arr : ${arr}`);
    
    let comb = '';
    for (let i = 0; i < arr.length; i++) {
        comb += arr[i];
    }
    console.log(`comb : ${comb}`);
    return Number(comb);
}