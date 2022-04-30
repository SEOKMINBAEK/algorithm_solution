/* 

0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.


제한사항
s의 길이는 1 이상 150,000 이하입니다.
s에는 '1'이 최소 하나 이상 포함되어 있습니다.

*/


// 매개변수 s는 이진 변환이 실행될때마다 이전 실행결과 값이 들어와야 한다.
// 결과값엔 제거된 '0'의 갯수만 필요
// '1'의 길이를 몫(/)과 나머지(%)를 통해 2진변환(simple_solution은 toString(2)를 활용)
// 재귀함수를 호출하여 '1'이 도출될때까지 반복


// basic_solution => while을 통한 2진변환
let basic_solution = (s,total_zero=0,count = 1) => {
    s = [...s];
    total_zero += s.filter(v => v === '0').length;

    let s_length = 0;

    s.filter(v => v === '1').forEach(v => ++s_length);

    let two_bit = [];

    while(s_length !== 1) {
        two_bit.unshift(s_length%2);
        s_length = Math.floor(s_length/2);
    }

    two_bit.unshift(1);

    s = '';

    two_bit.forEach(v => s += v);

    return s === '1' ? [count,total_zero] : solution(s,total_zero,++count);
}

/*

spread를 활용하여 문자열 s를 배열로 복사
filter()를 사용해 문자열 s 안의 '0'만을 배열로 return, return된 배열의 length를 제거된 0의 갯수에 더해줌
filter()를 사용해 문자열 s 안의 '1'만큼 s_length를 증가

s_length의 몫이 1이 될때까지 나머지를 배열에 담은 후 몫 1을 unshift 후 문자열로 재할당

문자열 s가 '1'이면 최종값 return, 아닐 시 재귀함수 호출을 통해 변환 반복

*/


// simple_solution => Number.prototype.toString()을 통한 진수변환
let simple_solution = (s,total_zero=0,count = 1) => {
    s = [...s];
    total_zero += s.filter(v => v === '0').length;

    let s_length = 0;

    s.filter(v => v === '1').forEach(v => ++s_length);

    s = s_length.toString(2);

    return s === '1' ? [count,total_zero] : solution(s,total_zero,++count);
}

/*

toString()의 인자로 진수값을 전달하면 해당 진법으로 변환한 값을 문자열로 반환

*/
