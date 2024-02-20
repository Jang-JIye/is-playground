console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);

// 동등 연산자
const a = 1;
const b = "1";

// 일치 연산자 / ==은 타입확인을 하지 않지만, ===은 확인한다.
console.log(a === b); 

//----------------------------------

// 조건문
//if, else, else-if 문
const age = 19;

if (age > 19) {
    console.log("환영합니다.");
}
if (age <= 19) {
    console.log("안녕히 가세요.");
}
console.log("----------------------")

if (age > 19) {
    console.log("환영합니다.");
} else if (age === 19) {
    console.log("수능 잘 치세요.")
} else {
    console.log("안녕히 가세요.");
}

console.log("----------------------")
