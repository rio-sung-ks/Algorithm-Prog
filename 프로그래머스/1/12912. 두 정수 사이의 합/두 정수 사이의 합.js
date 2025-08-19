function solution(a, b) {
  
//      (b * (b + 1)) / 2
//      - (a * (a + 1)) / 2
    
//     b2 + b - a2 + a
//     (b-a)(b+a) + (b+a)
//     (b+a)(b-a+1) / 2

    return (Math.abs(b-a)+1) * (b+a) / 2
    
}

