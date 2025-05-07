const users = [
    { name: "Rajendra Dhanvi", church: "Church Name 1", phone: "(225) 555-0118", details: "Established in 2007...", place: "Thane" },
    { name: "John", church: "Church Name 2", phone: "(205) 555-0100", details: "Established in 2007. John sir established it", place: "Vikhroli" },
    { name: "Raj", church: "Church Name 3", phone: "(302) 555-0107", details: "The only church that distributes food to ...", place: "Thane" },
    { name: "Dhanaashree", church: "Church Name 4", phone: "(252) 555-0126", details: "Established in 2012...", place: "Kanjur Marg" },
    { name: "Jerome Bell", church: "Church Name 5", phone: "(629) 555-0129", details: "The only church that distributes food to ...", place: "Kurla" },
    { name: "Kathryn Murphy", church: "Church Name 6", phone: "(406) 555-0120", details: "Established in 2012...", place: "Thane" },
    { name: "Jacob Jones", church: "Church Name 7", phone: "(208) 555-0112", details: "The only church that distributes food to ...", place: "Dombivli" },
    { name: "Kristin Watson", church: "Church Name 8", phone: "(704) 555-0127", details: "The only church that distributes food to ...", place: "Ghatkopar" },
  ];

  const tableBody = document.getElementById("user-rows");
  users.forEach(user => {
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.church}</td>
        <td>${user.phone}</td>
        <td>${user.details}</td>
        <td>${user.place}</td>
        <td>
          <button class="btn-approve">Approve</button>
          <button class="btn-delete">Delete</button>
        </td>
      </tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
  });