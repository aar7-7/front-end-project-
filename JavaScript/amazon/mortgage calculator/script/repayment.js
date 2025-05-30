let repaymentHTML  = '';
let interestHTML = '';
if(repaymentHTML  === ''){
    document.querySelector(".empty-state").innerHTML = `
      <img src="assets/images/illustration-empty.svg" alt="empty state image">

    `;

}
document.querySelector('.calculate-button').addEventListener('click', function() {
    let mortgageAmount = document.getElementById("mortgage-amount").value ;
    let interestRate = document.getElementById("interest-rate").value;
    let mortgageTerm = document.getElementById("mortgage-term").value;
    calculateMonthlyPayment(mortgageAmount, interestRate, mortgageTerm);
    
}
);  
function calculateMonthlyPayment(mortgageAmount, interestRate, mortgageTerm){
    //convert intrest rate to monthly
    let r  = interestRate / (12 * 100);
    //convert years to months
    let n = mortgageTerm * 12;
    //calculate monthly payment
    let monthlyPayment = (mortgageAmount * r) / (1 - Math.pow(1 + r, -n));
    //round to 2 decimal places
    monthlyPayment = Math.round(monthlyPayment * 100) / 100;
    let totalRepayment = monthlyPayment * n;
    let totalInterest = totalRepayment - mortgageAmount;
    let selectedType = document.querySelector(
      'input[name="mortgage-type"]:checked'
    );
   
    if(selectedType && selectedType.value === 'repayment'){
        repaymentHTML += `
          <div class="monthly">Your monthly repayments</div>
          <div class="monthly-amount">$${monthlyPayment}</div>
          <div class="total-label">Total you’ll repay over the term</div>
          <div class="total-amount">$${totalRepayment}</div>
          `; 
          document.querySelector('.result-box').innerHTML = repaymentHTML;
          repaymentHTML = '';

    }else if (selectedType && selectedType.value === "interest-only") {
      interestHTML += `
        <div class="monthly">Your total interest: </div>
        <div class="monthly-amount">$${totalInterest}</div>
        `;
      document.querySelector(".result-box").innerHTML = interestHTML;
      interestHTML = "";
    }

    
} 