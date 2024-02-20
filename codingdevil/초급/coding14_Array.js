//배열 (array) : 순서가 있는 리스트

//1번에 철수 2번에 영희...30번에 영수 
let student = ['철수', '영희',... '영수']; // -> index 

//배열의 특징 : 1.배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있다.
let arr = [
    '민수',
    3,
    {
        name:'Mike',
        age:30,
    },
    function() {
        console.log('TEST');
    }
];

//length : 배열의 길이
//push() : 배열 끝에 추가
let days1 = ['월', '화', '수'];
days1.push('목')
console.log(days1) // ['월', '화', '수', 목']
//pop() : 배열 끝 요소 제거
let days2 = ['월', '화', '수'];
days2.pop()
console.log(days2) // ['월', '화']

//shift, unshift : 배열 앞에 제거 / 추가
//추가
days1.unshift('일');
console.log(days1) // [ '일', '월', '화', '수', '목' ]
//제거
days2.shift();
console.log(days2) // [ '화' ]

//반복문 : for
let days3 = ['월', '화', '수'];
for (let index = 0; index < days3.length; index++) {
    console.log(days3[index])
}

//반복문 : for..of
let days4 = ['월', '화', '수'];
for (let day of days4) {
    console.log(day);
}










