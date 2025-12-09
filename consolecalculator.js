while (true) {
let a = prompt("Enter the Operator You want to perform(1-9):\n" +
    "1) Addition \n" +
    "2) Minus \n" +
    "3) Product \n" +
    "4) Division \n" +
    "5) Square \n" +
    "6) SquareRoot \n" +
    "7) Remainder \n" +
    "8) Power \n" +
    "9) Logarithm(with base 10)\n")

let sum = 0
let arr = []
let product = 1

    if ((a === "1") || (a === "2") || (a === "3")) {
        let k = prompt("Enter Number of Operand you want to take:")
        k = Number.parseInt(k)

        for (let i = 0; i < k; i++) {
            let j = prompt(`Enter the Number${i + 1}`)
            j = Number.parseInt(j)
            arr.push(j)
        }

        if (a === "1") {
            for (let l = 0; l < k; l++) {
                sum += arr[l]
            }
            alert(`Sum is:${sum}`)
        }
        else if (a === "2") {
            let first = arr[0]
            for (let l = 1; l < k; l++) {
                first -= arr[l]
            }
            alert(`Minus is: ${first}`)
        }
        else if (a === "3") {
            for (let l = 0; l < k; l++) {
                product *= arr[l]
            }
            alert(`Product is: ${product}`)
        }
    }
    else if ((a === "4") || (a === "7")) {
        let x = prompt("Enter the Dividend")
        x = Number.parseInt(x);

        let y = prompt("Enter the Divisor")
        y = Number.parseInt(y);

        if (a === "4") {
            alert(`Quotient is: ${Math.floor(x / y)}`)
        }
        else {
            alert(`Remainder is: ${x % y}`)
        }
    }
    else if (a === "5") {
        let sq = prompt("Enter the Number you want to square:")
        alert(`Square is: ${sq ** 2}`)
    }
    else if (a === "6") {
        let sr = prompt("Enter the number you want to take SquareRoot:")
        alert(`SquareRoot is: ${sr ** 0.5}`)
    }
    else if (a === "8") {
        let bs = prompt("Enter the Number")
        let pw = prompt("Enter the Power")
        alert(`${bs} to the power ${pw} is: ${bs ** pw}`)
    }
    else if (a === "9") {
        let lg = prompt("Enter the number")
        alert(`Logarithm of ${lg} with base 10 is: ${Math.log10(lg)}`)
    }
    else {
        alert("Invalid Operand")
    }

    let again = confirm("Do you want to play again")
    if (!again) {
        break;
    }

}