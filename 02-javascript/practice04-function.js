// 1~100 사이 랜덤 숫자 하나
// Math.floor(Math.random() * 100) + 1
const computer = Math.floor(Math.random() * 100) + 1;
let count = 0;
while(true){count++;
    const guess = Number(prompt("1부터 100사이의 숫자를 맞춰보세요!"))
    if(isNaN(guess)) {alert('제대로 입력해주세요!');}
    else if(guess < computer) {alert ("해당 숫자보다 큽니다↑");}
    else if(guess > computer) {alert ("해당 숫자보다 작습니다↓");}
    else {alert (`정답입니다! ${count}번 만에 맞췄습니다!!`); break;}
    
    //else if(guess > getTarget()) {alert ("해당 숫자보다 작습니다↓")}
    //else {alert ("정답입니다! 몇 번 만에 맞췄습니다!!");}
}
