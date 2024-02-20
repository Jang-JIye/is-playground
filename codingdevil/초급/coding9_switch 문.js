// == if-else
switch(평가) {
    case A :
    // A 일때 코드
    case B : 
    // B 일때 코드
}

if(평가 == A) {
    // A 일때 코드
} else {
    // B 일때 코드
}
// --------------------------
let fruit = prompt('무슨 과일을 사고 싶나요?');

switch (fruit) {
    case '사과' : 
    console.log('100원 입니다.');
    break;
    case '바나나' : 
    console.log('200원 입니다.');
    break;
    case '키위' : 
    console.log('300원 입니다.');
    break;
    case '멜론' : 
    case '수박' : 
    console.log('500원 입니다.');
    break;
    default : 
    console.log('그런 과일은 없습니다.')
}




