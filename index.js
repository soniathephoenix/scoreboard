let countElh = document.getElementById("count-elh")
let countElg = document.getElementById("count-elg")

let countH = 0

let countG = 0


function add1h() {
    countH += 1
    countElh.textContent = countH
}

function add2h() {
    countH += 2
    countElh.textContent = countH
}

function add3h() {
    countH += 3
    countElh.textContent = countH
}

function add1g() {
    countG += 1
    countElg.textContent = countG
}

function add2g() {
    countG += 2
    countElg.textContent = countG
}

function add3g() {
    countG += 3
    countElg.textContent = countG
}