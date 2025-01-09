let originalLeadCPA = 0;
let originalSalesCPA = 0;

function calculateMetrics() {
  const CPC = parseFloat(document.getElementById("cpc").value);
  const pageToLeadCR = parseFloat(document.getElementById("pageToLeadCR").value) / 100;
  const leadToSaleCR = parseFloat(document.getElementById("leadToSaleCR").value) / 100;
  const averagePrice = parseFloat(document.getElementById("averagePrice").value);

  if (!CPC || !pageToLeadCR || !leadToSaleCR || !averagePrice) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  // Calculate Lead CPA and Sales CPA
  const leadCPA = CPC / pageToLeadCR;
  const salesCPA = leadCPA / leadToSaleCR;

  // Calculate ROAS
  const roas = averagePrice / salesCPA;

  // Display results
  document.getElementById("leadCPA").textContent = `$${leadCPA.toFixed(2)}`;
  document.getElementById("salesCPA").textContent = `$${salesCPA.toFixed(2)}`;
  document.getElementById("roas").value = roas.toFixed(2);

  // Store original values for recalculating
  originalLeadCPA = leadCPA;
  originalSalesCPA = salesCPA;
}

function recalculateWithROAS() {
  const newROAS = parseFloat(document.getElementById("roas").value);

  if (!newROAS || newROAS <= 0) {
    alert("Please enter a valid ROAS value.");
    return;
  }

  // Recalculate Sales CPA and Lead CPA based on new ROAS
  const averagePrice = parseFloat(document.getElementById("averagePrice").value);
  const newSalesCPA = averagePrice / newROAS;
  const leadToSaleCR = parseFloat(document.getElementById("leadToSaleCR").value) / 100;
  const newLeadCPA = newSalesCPA * leadToSaleCR;

  // Update displayed results
  document.getElementById("leadCPA").textContent = `$${newLeadCPA.toFixed(2)}`;
  document.getElementById("salesCPA").textContent = `$${newSalesCPA.toFixed(2)}`;
}
