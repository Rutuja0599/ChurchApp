document.addEventListener("DOMContentLoaded", () => {
  const songs = [
    {
      title: "Mere Prabhu",
      author: "Author 1",
      language: "Hindi",
      duration: "2min 30sec",
    },
    {
      title: "Mere Prabhu",
      author: "Author 1",
      language: "Hindi",
      duration: "2min 30sec",
    },
    {
      title: "Mere Prabhu",
      author: "Author 1",
      language: "Hindi",
      duration: "2min 30sec",
    },
    {
      title: "Mere Prabhu",
      author: "Author 1",
      language: "Hindi",
      duration: "2min 30sec",
    },
  ];

  const tbody = document.getElementById("songsTableBody");

  songs.forEach((song) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${song.title}</td>
      <td>${song.author}</td>
      <td>${song.language}</td>
      <td>${song.duration}</td>
      <td><button class="browse-btn">Browse</button></td>
      <td><button class="delete-btn">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("entry-count").textContent =
    "Showing data 1 to 8 of 256K entries";
});
