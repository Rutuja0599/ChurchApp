document.addEventListener("DOMContentLoaded", () => {
    const songbooks = [
      { title: "Mere Prabhu", auther: "Auther 1", language: "Hindi", chars: 1345 },
      { title: "Mere Prabhu", auther: "Auther 1", language: "Hindi", chars: 786 },
      { title: "Mere Prabhu", auther: "Auther 1", language: "Hindi", chars: 1524 },
      { title: "Mere Prabhu", auther: "Auther 1", language: "Hindi", chars: 765 }
    ];
  
    const tbody = document.getElementById("songbooksTableBody");
  
    songbooks.forEach((book) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.auther}</td>
        <td>${book.language}</td>
        <td>${book.chars}</td>
        <td><button class="browse-btn">Browse</button></td>
        <td><button class="delete-btn">Delete</button></td>
      `;
      tbody.appendChild(tr);
    });
  
    document.getElementById("entry-count").textContent =
      "Showing data 1 to 8 of 256K entries";
  });
  