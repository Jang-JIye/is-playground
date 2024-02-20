// 객체 (Object)

const superman = {
    name : 'clark',
    age : '30',
}
console.log(superman.name)
console.log(superman['age'])

superman.hairColor = 'black';
superman['hobby'] = 'football';

delete superman.age;
console.log(superman);

//--------------------

function makeObject(name, age) {
    return {
        name : name,
        age : age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30)
console.log(Mike);

console.log('age' in Mike); //true
console.log('birthday' in Mike); //false


//--------------
// 객체 in
function isAdult(user) {
    if(!('age' in user) || //user에 age가 없거나
    user.age < 20) { // 20살 미만이거나
        return false;
    } else { 
        return true;
    }
}
const Tom = {
    name : 'Tom',
    age : 30
};
const Jane = {
    name : 'Jane',
};
console.log(isAdult(Tom))
console.log(isAdult(Jane))


//--------------------

//객체 for ... in
const Jack = {
    name : "Jack",
    age : 30,
};
for (x in Jack) {
    console.log(Jack[x]) //Jack['name'], Jack['age']를 둘 다 돈다.
}




