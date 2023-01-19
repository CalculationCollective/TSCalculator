const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const question = prompt => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve)
    })
}

(async () => {
    const num1: number = Number(await question("Enter the first number: "));
    const calculationType: number = Number(await question("Choose between:\n1) Addition\n2) Subtraction\n3) Multiplication\n4) Division"));
    const num2: number = Number(await question("Enter the second number: "));


    switch (calculationType)  {
        case 1:
            console.log(num1 + num2);
            break;
        case 2:
            console.log(num1 - num2);
            break;
        case 3:
            console.log(num1 * num2);
            break;
        case 4:
            console.log(num1 / num2);
            break;
        default:
            console.log(calculationType + " is not a valid function");
            break;
    }

    rl.close()
})()