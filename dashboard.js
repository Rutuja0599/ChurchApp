const offeringsData = [
    {
      name: 'Rajendra Dhanvi',
      amount: '200rs',
      mode: 'UPI'
    },
    {
      name: 'Rajendra Dhanvi',
      amount: '200rs',
      mode: 'Debit CARD'
    },
    {
      name: 'Rajendra Dhanvi',
      amount: '200rs',
      mode: 'Debit CARD'
    },
    {
      name: 'Rajendra Dhanvi',
      amount: '200rs',
      mode: 'UPI'
    }
  ];
  
  const tableBody = document.getElementById('offerings-table-body');
  
  offeringsData.forEach(entry => {
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.amount}</td>
      <td>${entry.mode}</td>
      <td><button class="download-btn">Download Receipt</button></td>
    `;
  
    tableBody.appendChild(row);
  });
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  