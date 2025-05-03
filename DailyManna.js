const mannaData = [
    {
      title: 'Mere Prabhu',
      description: 'Auther 1',
      dateTime: '2nd May 2025 12pm',
      characters: 1345
    },
    {
      title: 'Mere Prabhu',
      description: 'Auther 1',
      dateTime: '2nd May 2025 12pm',
      characters: 1345
    },
    {
      title: 'Mere Prabhu',
      description: 'Auther 1',
      dateTime: '2nd May 2025 12pm',
      characters: 1345
    }
  ];
  
  const tableBody = document.getElementById('manna-table-body');
  
  mannaData.forEach(item => {
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.dateTime}</td>
      <td>${item.characters}</td>
      <td>
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Edit</button>
      </td>
    `;
  
    tableBody.appendChild(row);
  });
  