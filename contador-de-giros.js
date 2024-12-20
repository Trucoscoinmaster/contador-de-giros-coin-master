// Coin Master Spin Counter Script
let spins = 0;

// Function to increase spins
function addSpin() {
    spins++;
    console.log("Total Spins: " + spins);
}

// Function to reset spins
function resetSpins() {
    spins = 0;
    console.log("Spins Reset to 0");
}

// Example usage:
addSpin(); // Adds a spin
addSpin(); // Adds another spin
resetSpins(); // Resets the spin counter
