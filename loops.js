// A while loop that prints all even numbers from 0 to 100

let x = 0;

while (x <= 100) {
    console.log(x)
    x+=2
}

// A while loop that prints every 3rd number going backwards from 100 until we reach 0

let i = 100;

while (i > 0) {
    console.log(i)
    i-=3
}

// A for loop that prints every other number from 1 to 100

let d = 1;

for (i = 1; i <= 100; i++) {
    console.log(i)
}

// A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, 
// and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” 
// instead of the number.

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Hello World")
    } else if (i % 3 == 0) {
        console.log("Hello")
    } else if (i % 5 == 0) {
        console.log("World")
    } else {
        console.log(i)
    }
}