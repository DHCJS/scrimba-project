let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-screen")
let guestEl = document.getElementById("guest-screen")
let newEl = document.getElementById("newgame")

// HOME SCORE //

function home1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function home2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function home3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

// GUEST SCORE //

function guest1() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guest2() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guest3() {
    guestScore += 3
    guestEl.textContent = guestScore
}

// New Game //

function newgame() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}