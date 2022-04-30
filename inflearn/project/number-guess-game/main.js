// 런덤번호 지정
// 유저가 번호를 입력 -> go라는 버튼 누름
/* 
<Logic>
Reset버튼 -> 게임 리셋
5번의 기회
유저가 1~100 범위 밖에 숫자를 입력하면 알려줌(기회는 유지)
유저가 이미 입력한 숫자를 또 입력하면 알려줌(기회는 유지)
*/

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

// 함수를 매개변수로 넘겨줘야 click시에만 실행
// play() 로 넘겨주면 한번 실행됨
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
    userInput.value = "";
})

function pickRandomNum() {
    // 1~ 100 랜덤 번호 
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답 =", computerNum);
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
        return;
    }

    chances--;
    chanceArea.textContent = `남은기회: ${chances}번`;
    if (userValue < computerNum) {
        resultArea.textContent = "Up!!!";
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!!!";
    } else {
        resultArea.textContent = "맞추셨습니다!!!";
        gameOver = true;
    }

    history.push(userValue);


    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver) {
        playButton.disabled = true;
    }
}

function reset() {
    // user Input 창 정리
    userInput.value = "";
    // 새로운 번호 생성
    pickRandomNum();

    resultArea.textContent = "결과가 여기 나옵니다";
}

pickRandomNum();