    // Amount slider
    function AmountChange() {
      document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
    }

    // Years slider
    function YearChange() {
      document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
    }

    // Rate slider
    function RateChange() {
      document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
    }

    // EMI calculation
    function CalculateClick() {
      const P = parseFloat(document.getElementById("txtAmount").value);
      const annualRate = parseFloat(document.getElementById("txtRate").value);
      const years = parseFloat(document.getElementById("txtYears").value);

      if (isNaN(P) || isNaN(annualRate) || isNaN(years) || P <= 0 || annualRate <= 0 || years <= 0) {
        document.getElementById("txtEMI").innerText = "Please enter valid values!";
        return;
      }

      const R = annualRate / (12 * 100); // monthly interest
      const N = years * 12; // months
      const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

      document.getElementById("txtEMI").innerText = `Your Monthly EMI: ₹${EMI.toFixed(2)}`;
    }
  