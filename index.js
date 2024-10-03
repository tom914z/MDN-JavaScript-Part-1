// Define the maximum value up to which we will generate random prime candidates
const MAX_PRIME = 1000000;

/**
 * Checks if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} - Returns true if the number is prime, otherwise false.
 */
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

/**
 * Generates a random number between 0 and a given maximum value.
 * @param {number} max - The upper bound for the random number.
 * @returns {number} - Returns a random integer.
 */
const random = (max) => Math.floor(Math.random() * max);

/**
 * Generates an array of prime numbers up to a specified quota.
 * @param {number} quota - The number of primes to generate.
 * @returns {Array<number>} - An array of prime numbers.
 */
function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

// DOM manipulation code to handle button events
document.addEventListener("DOMContentLoaded", () => {
    const quotaInput = document.querySelector("#quota");
    const output = document.querySelector("#output");

    // Event listener for the "Generate primes" button
    document.querySelector("#generate").addEventListener("click", () => {
        const quota = parseInt(quotaInput.value);
        
        if (isNaN(quota) || quota <= 0) {
            output.textContent = "Please enter a valid positive number.";
            return;
        }

        output.textContent = "Generating primes, please wait...";
        
        // Generate primes and update the output after they are ready
        const primes = generatePrimes(quota);
        output.textContent = `Finished generating ${quota} primes!`;
    });

    // Event listener for the "Reload" button to refresh the page
    document.querySelector("#reload").addEventListener("click", () => {
        document.location.reload();
    });
});
