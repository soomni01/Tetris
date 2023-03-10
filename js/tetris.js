//DOM
const playground = document.querySelector(".playground > ul"); /*playground 안에 있는 ul까지 적용*/

// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

init()

//functions
function init() {
    for (let i = 0; i < GAME_ROWS4; i++) {
        prependNewLine()
    }
}
console.log(playground)

for(let i=0; i<GAME_ROWS; i++) {
    prependNewLine()
}
function prependNewLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for(let j=0; j<GAME_COLS; j++) {
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul)
    playground.prepend(li)
}