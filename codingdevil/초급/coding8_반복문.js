// 반복 횟수가 명확히 정의되 있으면 for문을, 그ㅓㅎ지 않다면 while문을 사용하면 좋다.

//for 문
for (let i = 0; i < 10; i++) {
    //반복할 코드
    console.log(i + 1);
}

//while 문
let i = 0;
while (i < 10) {
    //코드
    console.log(i);
    i++;
}

//do..while 문
let j = 0;
do {
    //코드
    i++;
} while (i < 10)

//---------------------------------------

//break
while(true) {
    let answer = confirm('계속 할까요?');
    if (!answer) {
        break;
    }
}

//continue
// 짝수만
for (let i = 0; i < 10; i++) {
    if (i % 2) {
        continue;
    }
    console.log(i);
}