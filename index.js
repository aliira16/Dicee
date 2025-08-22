let imgOne = document.querySelector(".img1");
let imgTwo = document.querySelector(".img2");
let h = document.querySelector("h1")
let btn = document.querySelector("button")

// if (sessionStorage.getItem("visited")) {
//     getResult()
// } else {
//     imgOne.setAttribute("src", `/DOM Challenge Starting Files/images/dice6.png`)
//     imgTwo.setAttribute("src", `/DOM Challenge Starting Files/images/dice6.png`)
//     window.sessionStorage.setItem("visited", true)
// }


function getResult() {
    let numberOne = Math.floor(Math.random() * 6) + 1
    let numberTwo = Math.floor(Math.random() * 6) + 1
    imgOne.setAttribute("src", `images/dice${numberOne}.png`)
    imgTwo.setAttribute("src", `images/dice${numberTwo}.png`)
    if (numberOne > numberTwo) {
        h.textContent = "player 1 win 🎉"
    } else if (numberTwo > numberOne) {
        h.textContent = "player 2 win 🎉"
    } else {
        h.textContent = "🎲 BIG draw 🎲"
    }
}



btn.onclick = function () {
    getResult()
}





