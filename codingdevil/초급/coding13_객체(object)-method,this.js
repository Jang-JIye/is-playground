// 객체(object) - method, this 
let boy = {
    name : "Mike",
    showName : function() {
        console.log(boy.name)
    }
};
boy.showName

let man = boy;
man.name = "Tom";


// 화살표 함수는 일반 하수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴

//------------------------------------------------------------------










