/*

S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

제한사항
d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

*/


// 각 부서별 필요한 금액 오름차순 sort
// 예산만 맞으면 모든부서 예산투입 가능
// 총 예산투입 가능한 부서의 count return


// basic_solution
let basic_solution = (d,budget) => {

    d.sort((a,b) => a-b);
    let sum_num = 0;

    for(let i=0; i<d.length; i++) {
        if((sum_num + d[i]) <= budget) {
            sum_num += d[i];
            if(i === d.length-1) {
                return i+1;
            }
        } else {
            return i;
        }
    }
}

/*

합계금액이 budget을 넘지 않는경우 +d[i],
i가 last_index인 경우 모든 부서에 지급 가능 
따라서 d.length를 return

합계금액이 budget을 넘을경우 현재 index return
조건을 통과한 부서의 count === 조건을 통과하지 못한 부서의 index
*/


// simple_solution => array.prototype.reduce()를 활용
let simple_solution = (d,budget) => {
    return d.sort((a,b) => a-b).reduce((arr,cur) => arr + ((budget -= cur) >= 0),0);
}

/*

reduce()를 활용
누적값 arr은 ((budget -= cur) >= 0) 비교문을 평가, (budget = budget - 현재요소cur)이 반복된다.
true일 시 +1, false일 시 +0이 누적된다.

즉 예산, budget < 0 이 되는 경우부턴 arr의 누적, 즉 부서의 count가 되지 않는다.
*/ 