let countEl = document.getElementById("score-count")

let count = 0

function btn1() {
    count = count + 1
    countEl.innerText = count
}

function btn2() {
    count = count + 2
    countEl.innerText = count
}

function btn3() {
    count = count + 3
    countEl.innerText = count
}


let countNl = document.getElementById("score-count2")
let count2 = 0

function btn1a() {
    count2 = count2 + 1
    countNl.innerText = count2
}


function btn2a() {
    count2 = count2 + 2
    countNl.innerText = count2
}


function btn3a() {
    count2 = count2 + 3
    countNl.innerText = count2
}