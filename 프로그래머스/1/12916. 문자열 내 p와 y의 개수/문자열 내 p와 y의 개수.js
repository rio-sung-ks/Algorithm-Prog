function solution(s){
    let stringArr = s.toUpperCase().split('');
    console.log("stringArr :", stringArr);
    if (!stringArr.find(e=> e==='P') && !stringArr.find(e=> e==='Y')) return true;    
    if (stringArr.filter(e => e === 'P').length === stringArr.filter(e => e === 'Y').length) return true;
    return false;
    console.log("countP :", countP);
    
}