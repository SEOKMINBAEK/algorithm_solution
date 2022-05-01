/*

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 
어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면,
h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 
이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

제한사항
과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

*/


// h의 값은 논문의 총 길이를 초과할 수 없다. h <= citations.length
// 인용횟수가 h이상인 논문을 배열 h_over에 저장
// h의 값은 h_over의 길이를 초과할 수 없다. h <= h_over.length


let citations = [3, 0, 6, 1, 5]; // ex


let solution = citations => {

    for(let h=citations.length; h>=0; h--) {
        let h_over = [];

        citations.forEach(v => {
            if(v >= h) h_over.push(v);
        })
        
        if(h_over.length >= h) return h;
    }
}

/*

h는 최대값인 citations.length부터 시작, citations의 요소들을 검사
citations의 요소와 h를 비교, 요소의값이 더 크면 h_over에 저장
h_over의 길이가 h 이상일 시 h값을 return
아닐 시 h값을 1감소 후 반복

*/ 