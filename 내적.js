/*

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

제한사항
a, b의 길이는 1 이상 1,000 이하입니다.
a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

*/


// a.length === b.length


// basic_solution => for를 이용, 같은 index끼리 연산 후 answer+=
let basic_solution = (a,b,answer = 0) => {

    for(let i=0; i<a.length; i++) answer += a[i]*b[i];

    return answer;
}
/*

매개변수 answer는 default = 0;
a[i]*b[i]가 실행된 값을 answer에 누적

*/


// simple_solution => array.prototype.reduce()를 이용
let simple_solution = (a,b) => {
    return a.reduce((arr,cur,i) => arr += a[i]*b[i], 0);
}

/*

reduce()를 이용, arr의 초기값은 0, a[i] * b[i]가 실행된 값을 arr에 누적

*/