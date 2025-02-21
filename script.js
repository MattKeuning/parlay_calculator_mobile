let betAmount = 0;
let legs = [];

function updateBet() {
    // Correctly get the bet value and parse it
    let betInput = document.getElementById('betInput');
    betAmount = parseFloat(betInput.value) || 0;  // Handle invalid or empty input
    console.log('Bet Amount:', betAmount);  // Debugging step to check value
    updatePayout();  // Update payout after changing the bet amount
}

function addLeg() {
    let legInput = document.getElementById('legInput');
    let legOdds = parseFloat(legInput.value);
    if (isNaN(legOdds)) {
        alert("Please enter a valid number for the leg!");
        return;
    }
    legs.push(legOdds);  // Add the leg odds to the array
    legInput.value = '';  // Clear the input field after adding the leg
    updatePayout();  // Update payout after adding a leg
}

function updatePayout() {
    let payout = betAmount;  // Initialize payout to bet amount

    // Calculate the total payout based on the odds of each leg
    legs.forEach(odd => {
        if (odd < 0) {
            payout = payout + payout * (100 / Math.abs(odd));   // Negative odds calculation
        } else {
            payout *= (1 + odd / 100);  // Positive odds calculation
        }
    });

    // Update the total payout displayed on the page
    document.getElementById('totalPayout').innerText = payout.toFixed(2);
}
