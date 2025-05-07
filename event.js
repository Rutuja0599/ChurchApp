document.addEventListener("DOMContentLoaded", () => {
    const events = [
      {
        title: "Mere Prabhu",
        desc: "Author 1",
        datetime: "2nd May 2025\n12pm",
        owner: "1345",
      },
      {
        title: "Mere Prabhu",
        desc: "Author 1",
        datetime: "2nd May 2025\n12pm",
        owner: "1345",
      },
      {
        title: "Mere Prabhu",
        desc: "Author 1",
        datetime: "2nd May 2025\n12pm",
        owner: "1345",
      },
    ];
  
    const tbody = document.getElementById("eventsTableBody");
  
    events.forEach((event) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${event.title}</td>
        <td>${event.desc}</td>
        <td>${event.datetime.replace('\n', '<br>')}</td>
        <td>${event.owner}</td>
        <td>
          <button class="delete-btn">Delete</button><br/>
          <button class="edit-btn">Edit</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  
    document.getElementById("entry-count").textContent =
      "Showing data 1 to 8 of 256K entries";
  });
  