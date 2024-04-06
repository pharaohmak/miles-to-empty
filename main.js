
// welcome instructions
alert("I will ask a few questions about your car and detrime if you need to stop for gas")

//initialize variables 
tankSize = parseFloat(prompt("What is the maximum number of gallons your car tank holds?"))
fuelLevel = parseFloat(prompt("How full is your gas tank? (in %)"))
mpg = parseFloat(prompt("How many miles per gallon does your car get?"))

// Calculate the number of miles their car can go with their current amount of gas in their tank.
let distance = ((fuelLevel / tankSize) * 100) / mpg

if(distance >= 200){
    document.querySelector('.txt-btn').addEventListener("click", function (e) {
        document.querySelector('.txt-results').innerHTML = `Yes, you can drive ${distance} miles and you can make it without stopping for gas!`
    });
document.querySelector('#img-btn').addEventListener("click", function (e) {
    document.querySelector('#img-result').src = '/IMG/enoughGas.jpg'
});
} else {
    document.querySelector('.txt-btn').addEventListener("click", function (e) {
        document.querySelector('.txt-results').innerHTML = `You can only drive ${distance} miles more, better get gas now while you can!`
    });
    document.querySelector('#img-btn').addEventListener("click", function (e) {
        document.querySelector('#img-result').src = '/IMG/notEnoughGas.jpg'
    });
} 


