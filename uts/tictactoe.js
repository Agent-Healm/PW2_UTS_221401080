
let tile = [];
let moves_made_human = [];
let moves_made_ai = []
let moves_made = [];
let x = null;
let moves = 'human';
let winner = false;
let gamescreen = 'menu';
let c = null;
let winCondition = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
];

const resetter = () => {
    tile = [];
    moves_made_human = [];
    moves_made_ai = []
    moves_made = [];
    x = null;
    moves = 'human';
    winner = false;
    gamescreen = 'menu';
    c = null;
    for (let x = 1; x<=9 ; x++){
        document.getElementById(`tile${x}`).style.background = 'none';
        document.getElementById(`tile${x}`).innerHTML = '';
    }
    document.getElementById('winner').innerHTML = ``;
    document.getElementById('restart').innerHTML = ``;
}

const tile_icon = (a, b) => {
    c = (b === 'human')? 'rgb(10,200,40)' : 'rgb(200,40,10)'
    document.getElementById(`tile${a}`).style.backgroundColor = c;
    document.getElementById(`tile${a}`).innerHTML = (b === 'human')? 'X' : 'O'
}

const game_check = (move) => {
    moves_made = moves_made_ai.concat(moves_made_human);
    let a = 0;
    let temp_move = [];
    let b = false;
    if (moves_made.length <4){
        return false;
    }
    else if (move === 'human'){
        temp_move = moves_made_human;
    }
    else if (move === 'ai'){
        temp_move = moves_made_ai;
    }
    
    winCondition.forEach(pair => {
        pair.forEach(cell =>{
            if (temp_move.includes(cell)){
                a++;
            }
        })
        if (a === 3){
            document.getElementById('winner').innerHTML = `${moves} win`;
            b = true;
        }
        a = 0;
    })
    return b;
}

const game = (x) => {
    moves_made = moves_made_ai.concat(moves_made_human);
    if ((moves_made.length < 9) && (!winner)){
        if ((!moves_made.includes(x))){
            if(moves === 'human'){
            moves_made_human.push(x);
            tile_icon(x,moves);

            winner = game_check(moves);
            moves = 'ai';
            if ((moves_made.length < 9) && (!winner)){
                moves_made = moves_made_ai.concat(moves_made_human);
                do {
                x = Math.floor(Math.random()*9 + 1);
                } while (moves_made.includes(x));
                tile_icon(x,moves);
                moves_made_ai.push(x);
                winner = game_check(moves);
                moves = 'human';
            }
            else if ((moves_made.length === 9) && (!winner)){
                document.getElementById('winner').innerHTML = `Draw`;
                winner = true;
                }
            }
            if (winner){
                document.getElementById('restart').innerHTML = `Restart?`;
                const reset = document.querySelector('#restart');
                reset.onclick = function() {resetter();}
            }
        x = null;
        }
}
}

const move = () => {
    tile[0] = document.querySelector(`#tile1`);
    tile[1] = document.querySelector(`#tile2`);
    tile[2] = document.querySelector(`#tile3`);
    tile[3] = document.querySelector(`#tile4`);
    tile[4] = document.querySelector(`#tile5`);
    tile[5] = document.querySelector(`#tile6`);
    tile[6] = document.querySelector(`#tile7`);
    tile[7] = document.querySelector(`#tile8`);
    tile[8] = document.querySelector(`#tile9`);

    if (!winner){
        tile[0].onclick = function() {game(1);}
        tile[1].onclick = function() {game(2);}
        tile[2].onclick = function() {game(3);}
        tile[3].onclick = function() {game(4);}
        tile[4].onclick = function() {game(5);}
        tile[5].onclick = function() {game(6);}
        tile[6].onclick = function() {game(7);}
        tile[7].onclick = function() {game(8);}
        tile[8].onclick = function() {game(9);}
    }
}

move();

let rgb = 8;
let r = 256;
let g = 0;
let b = 0;
let y = 0;
const newColor = () =>{
    if      ((r<256) && (g === 0) && (b === 0)) r+=rgb;
    else if ((r === 256) && (g<256) && (b === 0)) g+=rgb;
    else if ((r > 0) && (g === 256) && (b === 0)) r-=rgb;
    else if ((r === 0) && (g === 256) && (b < 256)) b+=rgb;
    else if((r === 0) && (g > 0) && (b === 256)) g-=rgb;
    else if((r<256) && (g === 0) && (b === 256)) r+=rgb;
    else if((r === 256) && (g === 0) && (b > 0)) b-=rgb;
    return `rgb(${r} , ${g}, ${b})`;
}

setInterval(function(){
    document.body.style.backgroundColor = newColor()
}, 40);