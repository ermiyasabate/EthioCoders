/*
 * Programming Quiz: Countdown, Liftoff!
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output
 */

// your code goes here
let nasaCountdown  = 60

while(nasaCountdown >= 0) {
    if (nasaCountdown === 50) {
        console.log("Orbiter transfers from ground to internal power")
    } else if (nasaCountdown === 31) {
        console.log("Ground launch sequencer is go for auto sequence start")
    } else if (nasaCountdown === 16) {
        console.log("Activate launch pad sound suppression system")
    } else if (nasaCountdown === 10) {
        console.log("Activate main engine hydrogen burnoff system")
    } else if (nasaCountdown === 6) {
        console.log("Main engine start")
    } else if (nasaCountdown === 0) {
        console.log("Solid rocket booster ignition and liftoff!")
    } else {
        console.log("T-" + nasaCountdown + " seconds")
    }

    nasaCountdown = nasaCountdown - 1
}