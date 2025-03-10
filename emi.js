document.addEventListener("DOMContentLoaded", function () {
    // Select all input fields and range sliders
    const loanAmountInput = document.getElementById("loan_amount");
    const loanAmountRange = document.getElementById("loan_amount_range");
    const interestRateInput = document.getElementById("interest_rate");
    const interestRateRange = document.getElementById("interest_rate_range");
    const loanTenureInput = document.getElementById("loan_tenure");
    const loanTenureRange = document.getElementById("loan_tenure_range");

    // Select output fields
    const emiValue = document.getElementById("emi_value");
    const emiResult = document.getElementById("emi_result");
    const principalResult = document.getElementById("principal_result");
    const interestResult = document.getElementById("interest_result");
    const totalResult = document.getElementById("total_result");

    // Function to calculate EMI
    function calculateEMI() {
        let principal = parseFloat(loanAmountInput.value);
        let annualInterest = parseFloat(interestRateInput.value);
        let tenureYears = parseInt(loanTenureInput.value);

        if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenureYears)) {
            return;
        }

        let monthlyInterestRate = annualInterest / 12 / 100;
        let tenureMonths = tenureYears * 12;

        let emi;
        if (monthlyInterestRate === 0) {
            emi = principal / tenureMonths; // Handle 0% interest case
        } else {
            emi =
                (principal *
                    monthlyInterestRate *
                    Math.pow(1 + monthlyInterestRate, tenureMonths)) /
                (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
        }

        let totalPayment = emi * tenureMonths;
        let totalInterest = totalPayment - principal;

        // Update UI
        emiValue.innerText = `₹ ${emi.toFixed(2)}`;
        emiResult.innerText = `₹ ${emi.toFixed(2)}`;
        principalResult.innerText = `₹ ${principal.toFixed(2)}`;
        interestResult.innerText = `₹ ${totalInterest.toFixed(2)}`;
        totalResult.innerText = `₹ ${totalPayment.toFixed(2)}`;
    }

    // Function to sync range input with text input
    function syncInputRange(input, range) {
        input.addEventListener("input", function () {
            range.value = input.value;
            calculateEMI();
        });

        range.addEventListener("input", function () {
            input.value = range.value;
            calculateEMI();
        });
    }

    // Syncing input and range for each field
    syncInputRange(loanAmountInput, loanAmountRange);
    syncInputRange(interestRateInput, interestRateRange);
    syncInputRange(loanTenureInput, loanTenureRange);

    // Initial calculation
    calculateEMI();
});
