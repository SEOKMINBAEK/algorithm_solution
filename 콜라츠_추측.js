/*

1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 
모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요.
단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

제한 사항
입력된 수, num은 1 이상 8000000 미만인 정수입니다.

*/


// 자연수 n이 1인 경우에는 반복횟수는 0을 return해야함
// 반복횟수가 500회가 되어도 자연수 n이 1이 되지 않으면 반복횟수는 -1을 return
// 즉 반복횟수가 500회를 초과하면 연산이 불필요



// basic_solution => while을 활용한 조건 반복
let basic_solution = n => {
    let answer = 0;

    while(n != 1 && answer != -1) {
        n = n%2 ? n*3+1 : n/2;
        answer = answer < 500 ? ++answer : -1;
    }
    return answer;
}
/*
반복의 조건은 자연수 n이 1이 아니며 반복횟수가 -1이 아닌경우
즉 자연수 n의 값이 1로 도출되었거나 반복횟수가 500회를 넘어가 -1이 된 경우는 반복을 하고 return

반복횟수 answer는 500회 이하일때만 count가 유의미 하다. 따라서 삼항이항 연산을 통해
반복횟수의 증가는 answer가 500보다 작을때만 유효, 그 이상은 -1을 할당 후 반복을 종료

또한 자연수 n의 최초값이 1인경우 반복을 통과하지 않고 answer의 초기값 0이 return
*/



// simple_solution => 삼항이항연산자와 재귀함수를 통한 인자 전달과 호출
let simple_solution = (n,answer=0) => {
    answer = answer === 501 ? -1 : answer;
    return (n===1 || answer === -1) ? answer : simple_solution(n%2 ? n*3+1 : n/2,++answer);
}
/*
반복횟수(answer)를 선언 대신 매개변수에 default로 준다.
반복횟수(answer)의 증가는 재귀함수의 호출에서 인자를 전달하는 시점에서 증가한다.
따라서 n의 최초값이 1인 경우라면 answer의 값은 변동이 없는 default값인 0을 return

또한 자연수 n에 대한 검사도 재귀함수의 호출에서 인자를 넘겨줄때 삼항이항연산을 통해 결정됨
*/
