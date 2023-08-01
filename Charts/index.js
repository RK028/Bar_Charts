function plotChart() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const maxValue = parseFloat(document.getElementById("maxValue").value);
  
    if (isNaN(inputValue) || isNaN(maxValue)) {
      alert("Please enter valid numerical values for Input Value and Max Value.");
      return;
    }
  
    if (inputValue > maxValue) {
      document.getElementById("error").classList.remove("hidden");
      return;
    } else {
      document.getElementById("error").classList.add("hidden");
    }
  
    const inputPercentage = (inputValue / maxValue) * 100;
    const maxPercentage = 100;
  
    // Generate the HTML for all three charts
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = `
      <div class="bar-chart">
        <div class="input-bar" style="height: ${inputPercentage}%; background-color:blue;">
          ${maxPercentage.toFixed(2)}%
        </div>
        <div class="max-bar" style="height: ${maxPercentage}%; background-color:lightblue;">
          ${inputPercentage.toFixed(2)}%
        </div>
      </div>
      <div class="pie-chart">
        <div class="input-slice" style="transform: rotate(${inputPercentage * 3.6}deg); background-color:blue;">
        </div>
        <div class="max-slice" style="transform: rotate(360deg); background-color: lightblue;"></div>
      </div>
      <div class="bar-chart">
        <div class="input-bar" style="height: ${inputPercentage}%; background-color: blue;">
          ${maxPercentage.toFixed(2)}%
        </div>
        <div class="max-bar" style="height: ${maxPercentage}%; background-color: lightblue;">
          ${inputPercentage.toFixed(2)}%
        </div>
      </div>
    `;
  }
  
  // Function to handle the selection of chart type
  document.addEventListener("click", function(event) {
    const chartTypeDivs = document.querySelectorAll("#chartType div");
    chartTypeDivs.forEach(function(chartTypeDiv) {
      chartTypeDiv.classList.remove("selected");
    });
  
    if (event.target && event.target.nodeName === "DIV") {
      event.target.classList.add("selected");
    }
  })