document.addEventListener("DOMContentLoaded", () => {
  const mannaEntries = [
    {
      title: "Mere Prabhu",
      description: "Auther 1",
      dateTime: "2nd May 2025 12pm",
      chars: 1345
    },
    {
      title: "Mere Prabhu",
      description: "Auther 1",
      dateTime: "2nd May 2025 12pm",
      chars: 1345
    },
    {
      title: "Mere Prabhu",
      description: "Auther 1",
      dateTime: "2nd May 2025 12pm",
      chars: 1345
    }
  ];

  const tbody = document.getElementById("mannaTableBody");

  mannaEntries.forEach((entry) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${entry.title}</td>
      <td>${entry.description}</td>
      <td>${entry.dateTime}</td>
      <td>${entry.chars}</td>
       <td>
  <div class="button-group">
    <button class="delete">Delete</button>
    <button class="edit">Edit</button>
  </div>
</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("entry-count").textContent =
    "Showing data 1 to 8 of 256K entries";
});
