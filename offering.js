document.addEventListener("DOMContentLoaded", () => {
  const tableData = [
    { name: "Rajendra Dhanvi", amount: "200rs", mode: "UPI" },
    { name: "Rajendra Dhanvi", amount: "200rs", mode: "Debit CARD" },
    { name: "Rajendra Dhanvi", amount: "200rs", mode: "Debit CARD" },
    { name: "Rajendra Dhanvi", amount: "200rs", mode: "UPI" },
  ];

  const tbody = document.getElementById("tableBody");

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.amount}</td>
      <td>${row.mode}</td>
      <td><button class="download-btn">Download Receipt</button></td>
    `;
    tbody.appendChild(tr);
  });

  // Entry count text
  document.getElementById("entry-count").textContent =
    "Showing data 1 to 8 of 256K entries";
});
