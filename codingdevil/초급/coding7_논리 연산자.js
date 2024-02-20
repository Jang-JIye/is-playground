// OR
// 이름이 TOM 이거나, 성인이면 통과
const name = "Mike";
const age = 30;

if (name === "Tom" || age > 19) {
    console.log("통과");
}

console.log("----------------------")

// AND
// 이름이 Mike 이고, 성인이면 통과
const name2 = "Mike";
const age2 = 30;

if (name2 === "Mike" && age2 > 19) {
    console.log("통과");
} else {
    console.log("돌아가.")
}

console,log("-------------------------")

// NOT
// 나이를 입력받아 성인 아니면 돌아가라고....
const age3 = prompt("나이가...?");
const isAdult = age3 > 19;

if (!isAdult) {
    console.log("돌아가..")
}

// 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = "F";
const name3 = "Jane";
const isAdult1 = true;

//if (gender === "M" && name === "Mike" || isAdult) {
if (gender === "M" && (name3 === "Mike" || isAdult1)) {
    console.log("통과")
} else {
    console.log("돌아가...")
}


