const name = prompt("이름을 입력하세요.");
// alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name}님. 환영합니다.`);

//prompt는 default 값을 입력해둘 수도 있다.
const date = prompt("예약일을 입력해주세요.", "2020-10-");

const isAdult = confirm("구독을 취소 하시겠습니까?"); 
//확인 버튼 : true, 취소 버튼 : false
// 장점 : 기본 메서드를 빠르게 적용할 수 있다.
//단점 : 스크립크 일시 정지, 스타일링 X
console.log(isAdult)