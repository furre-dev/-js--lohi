const balanceElement = document.querySelector(".balance-number");
const guessBar = document.querySelector(".guess-bar");
const betAmountInput = document.querySelector(".bet-amount-input");
const guessBetInput = document.querySelector(".guess-bet-input");
const toggleBtn = document.querySelector(".toggle-btn");
const lastRoundElement = document.querySelector(".last-round-number");
const barContainer = document.querySelector(".bar-container");

const valueText = document.querySelector(".value");

const valueArrows = document.querySelector(".arrows");

const buttons = document.querySelectorAll("button");

const lastRoundStatus = document.querySelector(".last-round-status");
const lastRoundWonLost = document.querySelector(".last-round-won-lost");
const wonLostAmount = document.querySelector(".won-lost-amount");

const lastRound = document.querySelector(".last-round");

const rollButton = document.querySelector(".roll-btn");
const innerCircle = document.querySelector(".inner-circle");

const glowToggle = document.querySelector(".glow-onOff");

glowToggle.addEventListener("click", toggleGlow)

function toggleGlow() {
    glowToggle.classList.toggle("active");
    if (glowToggle.classList.contains("active")) {
        document.documentElement.style.setProperty('--shadow-opacity', '0.2');
    }else {
        document.documentElement.style.setProperty('--shadow-opacity', '0');
    }
    
}

/* let eben = window.getComputedStyle(
	document.querySelector('.guess-bar'), ':after'
).getPropertyValue('right');

console.log(eben) */

document.documentElement.style.setProperty('--left', '0%');
document.documentElement.style.setProperty('--right', '-100%');


let balance = 10000;
balanceElement.textContent = balance.toLocaleString("en-US");

rollButton.addEventListener("click", rollRound)


function rollRound() {
    lastRound.style.opacity = 100;

    let random = Math.random() * 101;

    innerCircle.style.left = random + "%";

    let betAmount = betAmountInput.value;
    if ((betAmount <= balance) && (betAmount > 0)) {
        balance -= betAmount;
        balanceElement.textContent = balance;
    } else {
        alert("insufficient funds or dont enter negative number");
        return;
    }

    if (toggleBtn.classList.contains("higher")) {
        let higherOdds = 100 - guessBar.value;
        if (random > guessBar.value) {
            balance += betAmount * (100 / higherOdds);

            balance = Math.floor(balance);
            balanceElement.textContent = balance;
            console.log("win");
            lastRoundElement.style.color = "green";
            howMuchWonLost("won", Math.floor((betAmount * (100 / higherOdds))));
            console.log(Math.floor((betAmount * (100 / higherOdds))));
        } else {
            lastRoundElement.style.color = "red";
            lastRoundElement.textContent = random;
            howMuchWonLost("lost", betAmount);
            return;
        }
    } else {
        if (random < guessBar.value) {
            balance += betAmount * (100 / guessBar.value);

            balance = Math.floor(balance);
            balanceElement.textContent = balance;
            console.log("win");
            lastRoundElement.style.color = "green";
            howMuchWonLost("won", Math.floor((betAmount * (100 / guessBar.value))));
            console.log(Math.floor((betAmount * (100 / guessBar.value))));
        } else {
            lastRoundElement.style.color = "red";
            lastRoundElement.textContent = random;
            howMuchWonLost("lost", betAmount)
            return;
        }
    }
    lastRoundElement.textContent = random;
}








//for coloring background and stuff
let valuePoint = guessBar.value;
let underColor = "linear-gradient(90deg, #FF5548 " + valuePoint + "%, #01E258 " + valuePoint + "%)"
let overColor = "linear-gradient(90deg, #01E258 " + valuePoint + "%, #FF5548 " + valuePoint + "%)"
let bgOverColor = "linear-gradient(90deg, rgba(1, 226, 88, 0.04) " + valuePoint + "%, rgba(255, 85, 72, 0.04) " + valuePoint + "%)";
let bgUnderColor = "linear-gradient(90deg, rgba(255, 85, 72, 0.04) " + valuePoint + "%, rgba(1, 226, 88, 0.04) " + valuePoint + "%)";





guessBar.style.background = overColor;
barContainer.style.background = bgOverColor;

valueText.textContent = guessBar.value;


toggleBtn.addEventListener("click", buttonClicked)
guessBar.addEventListener("mousemove", function () {
    valuePoint = guessBar.value;
    let underColor = "linear-gradient(90deg, #FF5548 " + valuePoint + "%, #01E258 " + valuePoint + "%)"
    let overColor = "linear-gradient(90deg, #01E258 " + valuePoint + "%, #FF5548 " + valuePoint + "%)"
    let bgUnderColor = "linear-gradient(90deg, rgba(1, 226, 88, 0.04) " + valuePoint + "%, rgba(255, 85, 72, 0.04) " + valuePoint + "%)";
    let bgOverColor = "linear-gradient(90deg, rgba(255, 85, 72, 0.04) " + valuePoint + "%, rgba(1, 226, 88, 0.04) " + valuePoint + "%)";

    valueText.textContent = guessBar.value;

    if (!toggleBtn.classList.contains("higher")) {
        guessBar.style.background = overColor;
        barContainer.style.background = bgUnderColor;
        document.documentElement.style.setProperty("--slider-green","rgb(1, 226, 88, 1)");
        document.documentElement.style.setProperty("--slider-red","rgb(255, 85, 72, 1)")

    } else {
        guessBar.style.background = underColor;
        barContainer.style.background = bgOverColor;
        document.documentElement.style.setProperty("--slider-green","rgb(255, 85, 72, 1)");
        document.documentElement.style.setProperty("--slider-red","rgb(1, 226, 88, 1)")
    }

    let procentCalcLeft = guessBar.value - 50;
    let procentCalcRight = -guessBar.value - 50;

    document.documentElement.style.setProperty('--left', procentCalcLeft+"%");
document.documentElement.style.setProperty('--right', procentCalcRight+'%');

})

function buttonClicked() {
    toggleButton(toggleBtn)
}

guessBar.addEventListener("click", function () {
    valuePoint = guessBar.value;
    let underColor = "linear-gradient(90deg, #FF5548 " + valuePoint + "%, #01E258 " + valuePoint + "%)"
    let overColor = "linear-gradient(90deg, #01E258 " + valuePoint + "%, #FF5548 " + valuePoint + "%)"
    let bgUnderColor = "linear-gradient(90deg, rgba(1, 226, 88, 0.04) " + valuePoint + "%, rgba(255, 85, 72, 0.04) " + valuePoint + "%)";
    let bgOverColor = "linear-gradient(90deg, rgba(255, 85, 72, 0.04) " + valuePoint + "%, rgba(1, 226, 88, 0.04) " + valuePoint + "%)";

    valueText.textContent = guessBar.value;

    if (!toggleBtn.classList.contains("higher")) {
        guessBar.style.background = overColor;
        barContainer.style.background = bgUnderColor;
        document.documentElement.style.setProperty("--slider-green","rgb(1, 226, 88, 1)");
        document.documentElement.style.setProperty("--slider-red","rgb(255, 85, 72, 1)")

    } else {
        guessBar.style.background = underColor;
        barContainer.style.background = bgOverColor;
        document.documentElement.style.setProperty("--slider-green","rgb(255, 85, 72, 1)");
        document.documentElement.style.setProperty("--slider-red","rgb(1, 226, 88, 1)")
        
    }

    let procentCalcLeft = guessBar.value - 50;
    let procentCalcRight = -guessBar.value - 50;

    document.documentElement.style.setProperty('--left', procentCalcLeft+"%");
document.documentElement.style.setProperty('--right', procentCalcRight+'%');

})

function buttonClicked() {
    toggleButton(toggleBtn)
}

function toggleButton(button) {
    valuePoint = guessBar.value;
    let underColor = "linear-gradient(90deg, #FF5548 " + valuePoint + "%, #01E258 " + valuePoint + "%)"
    let overColor = "linear-gradient(90deg, #01E258 " + valuePoint + "%, #FF5548 " + valuePoint + "%)"
    let bgUnderColor = "linear-gradient(90deg, rgba(1, 226, 88, 0.04) " + valuePoint + "%, rgba(255, 85, 72, 0.04) " + valuePoint + "%)";
    let bgOverColor = "linear-gradient(90deg, rgba(255, 85, 72, 0.04) " + valuePoint + "%, rgba(1, 226, 88, 0.04) " + valuePoint + "%)";
    //if lower
    if (!button.classList.contains("higher")) {
        button.textContent = "OVER";
        button.classList.add("higher");

        guessBar.style.background = underColor;
        barContainer.style.background = bgOverColor;
        document.documentElement.style.setProperty("--slider-green","rgb(255, 85, 72, 1)");
        document.documentElement.style.setProperty("--slider-red","rgb(1, 226, 88, 1)")
    } else {
        button.textContent = "UNDER";
        button.classList.remove("higher");
        document.documentElement.style.setProperty("--slider-green","rgb(1, 226, 88, 1)");
        document.documentElement.style.setProperty("--slider-red","rgb(255, 85, 72, 1)")

        guessBar.style.background = overColor;
        barContainer.style.background = bgUnderColor;
        
    }
}



function lastRoundsCircles(wonOrLost) {
    const newDiv = document.createElement("div");
    const newLi = document.createElement("li");
    const ul = document.querySelector(".last-rounds-ul");

    if(ul.children.length > 20) {
        ul.children[0].remove();
    }

    if(wonOrLost == "won") {
        newDiv.classList.add("win-circle");
        newDiv.classList.add("circles");
        ul.append(newLi);
        newLi.appendChild(newDiv);
    }
        else{
            newDiv.classList.add("lose-circle");
            newDiv.classList.add("circles");
            ul.append(newLi);
            newLi.appendChild(newDiv);
        }
       
}

function howMuchWonLost(wonOrLost, betamount) {
    lastRoundStatus.style.opacity = 100;

    lastRoundsCircles(wonOrLost);

    if (wonOrLost == "won") {
        lastRoundWonLost.textContent = "won ";
        lastRoundStatus.style.color = "green"
        wonLostAmount.textContent = betamount;

        valueArrows.src = "sources/down-arrow-green.png";
    } else {
        lastRoundWonLost.textContent = "lost ";
        lastRoundStatus.style.color = "red"
        wonLostAmount.textContent = betamount;

        valueArrows.src = "sources/down-arrow-red.png";
    }
    setTimeout(() => {
        lastRoundStatus.style.opacity = 0;
    }, 1000);

}











/*
}

//adds a forEach with click event listener which runs the select func
buttons.forEach(function (button) {
    button.addEventListener('click', select);
});
//select funk takes the classlist and returns button
function select(event) {
    let random = Math.random() * 101;

    const selectedButtonClass = event.target.classList[1];

    let betAmount = betAmountInput.value;
    if ((betAmount <= balance) && (betAmount > 0)) {
        balance -= betAmount;
    } else {
        alert("insufficient funds or dont enter negative number");
        return;
    }
    balanceElement.textContent = balance;
    let guessedBet = guessBetInput.value;
    if ((guessedBet <= 100) && (guessedBet >= 0) && (guessedBet.length > 0)) {

        if (selectedButtonClass == "lower") {
            guessBar.style.background = "linear-gradient(90deg, rgba(38, 189, 18, 1) " + guessedBet + "%, rgba(148, 3, 3, 1) " + guessedBet + "%)";
            if (random < guessedBet) {
                balance += betAmount * (100 / guessedBet);
                balance = Math.floor(balance);
                balanceElement.textContent = balance;
                console.log("win");
                lastRoundElement.style.color = "green";
                howMuchWonLost("won", Math.floor((betAmount * (100 / guessedBet))));
                console.log(Math.floor((betAmount * (100 / guessedBet))));
            } else {
                console.log("lost");
                lastRoundElement.style.color = "red";

                howMuchWonLost("lost", betAmount);
            }
        } else {
            guessBar.style.background = "linear-gradient(90deg, rgba(148, 3, 3, 1) " + guessedBet + "%, rgba(38, 189, 18, 1) " + guessedBet + "%)";
            if (random > guessedBet) {
                let higherOdds = 100 - guessedBet;
                balance += (betAmount * (100 / higherOdds));

                balance = Math.floor(balance);
                balanceElement.textContent = balance;
                console.log("win");
                lastRoundElement.style.color = "green";
                howMuchWonLost("won", Math.floor((betAmount * (100 / higherOdds))));
                console.log(Math.floor((betAmount * (100 / higherOdds))));
            } else {
                console.log("lost");
                lastRoundElement.style.color = "red";

                howMuchWonLost("lost", betAmount);
            }
        }
    } else {
        alert("ENTER 0-100")
    }


    numberShower.style.left = random + "%";
    lastRoundElement.textContent = random;
} */
//----------------------------------------------------------------------------------