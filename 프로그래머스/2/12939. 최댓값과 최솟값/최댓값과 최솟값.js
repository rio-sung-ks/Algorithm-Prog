function solution(s) {
    let arr1 = Array.from(new Set(s.split(' ')));
    console.log("arr1 :",arr1);
    let arr = arr1.filter((ele) => ele != '')
    console.log("arr :",arr);
    let index = Number(arr[0]);
    let min = index;
    let max = index;
            
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > min) {
            if (arr[i] <= max) {
            } else {
                max = Number(arr[i]);
            }
        } else {
            min = Number(arr[i]);
        }
    }
    console.log("min :", min);
    console.log("max :", max);
    return min + " " + max;
}
