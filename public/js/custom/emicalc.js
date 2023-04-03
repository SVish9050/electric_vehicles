$(()=>{
    $('#interest-rate').on('change', (e)=>{
        console.log(e.target.value, 'interest value')
    })

    $('#tenure-bar').on('change', (e)=>{
        console.log(e.target.value, 'tenure value')
    })

    calculateEMI();
})

let loanAmount = 1000000;
let interestRate = 12;
let tenure = 24;
function calculateEMI(loanAmount, interestRate, tenure) {
    // Convert interest rate from percentage to decimal
    interestRate = interestRate / (12 * 100);

    // Convert tenure from years to months
    // tenure = tenure * 12;

    // Calculate EMI
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, tenure)) / (Math.pow(1 + interestRate, tenure) - 1);


    // Round off EMI to two decimal places
    return Math.round(emi);
}


const emi = calculateEMI(loanAmount, interestRate, tenure);
console.log(`EMI: ${emi}`);