// 함수 선언문 vs 함수 표현식
// 함수 선언문 : 어디서든 호출 가능
function sayHello() {
    console.log('Hello');
}

// 함수 표현식 : 코드에 도달하면 생성
let sayHello = function() {
    console.log('Hello');
}


// 화살표 함수
let addBefore = function(num1, num2) {
    return num1 + num2;
}

let addAfter1 = (num1, num2) => {
    return num1 + num2;
}
let addAfter2 = (num1, num2) > num1 + num2;

let sayHello = name => `Hello, ${name}`;

let showError = () => {
    alert('error!');
}

let addAfter3 = (num1, num2) => {
    const result = num1 + num2;
    return result;
}





