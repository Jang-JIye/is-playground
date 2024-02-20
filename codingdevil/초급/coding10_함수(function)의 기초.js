// 함수 작성
function showError() {
    alert('에러가 발생했습니다. 다시 시도해주세요.');
}
showError();

//--------------------------------------------

// 매개변수가 있는 함수
function sayHello(name) {
    let msg = 'Hello';
    if (name) {
        msg = `Hello, ${name}`;
    }
    console.log(msg);
}
sayHello();
sayHello('Mike');
sayHello('Tom');
sayHello('Jane');


// 매개변수가 있는 함수
function sayHello(name) {
    let msg = 'Hello';
    if (name) {
        msg += ', ' + name;
    }
    console.log(msg);
}
sayHello();
sayHello('Mike');
sayHello('Tom');
sayHello('Jane');

//----------------------------

//전역 변수와 지역 변수
let msg = "welcome";

function sayHello(name) {
    let msg = "Hello"
    console.log(msg + ' ' + name);
}
sayHello('Mike');
console.log(msg)


let name2 = "Mike";
function sayHello(name2) {
    console.log(name2);
}
sayHello();
sayHello('Jane');


//OR
function sayHello(name) {
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg)
}
sayHello();
sayHello('Jane');



//return 으로 값 반환
function showError() {
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행되지 않습니다.');
}
const result = showError();
console.log(result);

