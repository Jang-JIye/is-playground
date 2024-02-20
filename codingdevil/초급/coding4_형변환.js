const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2; //여기서는 자동 형변환이 일어난다.

console.log(result);
//prompt 입력 -> 문자형
//불명확한 코드 출력을 방기하기 위해 명시적 형변환이 필요하다.

// Stirng
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

// Number
console.log(
    Number(true),
    Number(false)
)

// Boolean
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
) // 이외에는 전부 true
