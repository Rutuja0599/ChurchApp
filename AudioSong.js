const songsData = [
    {
      title: 'Mere Prabhu',
      author: 'Auther 1',
      language: 'Hindi',
      duration: '2min 30sec'
    },
    {
      title: 'Mere Prabhu',
      author: 'Auther 1',
      language: 'Hindi',
      duration: '2min 30sec'
    },
    {
      title: 'Mere Prabhu',
      author: 'Auther 1',
      language: 'Hindi',
      duration: '2min 30sec'
    },
    {
      title: 'Mere Prabhu',
      author: 'Auther 1',
      language: 'Hindi',
      duration: '2min 30sec'
    }
  ];
  
  const tableBody = document.getElementById('songs-table-body');
  
  songsData.forEach(song => {
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${song.title}</td>
      <td>${song.author}</td>
      <td>${song.language}</td>
      <td>${song.duration}</td>
      <td><button class="browse-btn">Browse</button></td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    tableBody.appendChild(row);
  });
  