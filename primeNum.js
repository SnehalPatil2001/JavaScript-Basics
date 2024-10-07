let num = 29; // Change this to any number you want to check
let isPrime = true;

if (num <= 1) {
    isPrime = false; // Numbers less than or equal to 1 are not prime
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false; // If divisible by i, it's not prime
            break; // No need to check further
        }
    }
}

console.log(num + " is prime: " + isPrime);
