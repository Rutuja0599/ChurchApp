// document.addEventListener("DOMContentLoaded", () => {
//   const users = [
//     {
//       name: "Rajendra Dhanvi",
//       gender: "Male",
//       phone: "(225) 555-0118",
//       email: "raju@gmail.com",
//       place: "Kanjur marg",
//       active: false
//     },
//     {
//       name: "Ankita",
//       gender: "Female",
//       phone: "(205) 555-0100",
//       email: "ankta@yahoo.com",
//       place: "Vashi",
//       active: true
//     },
//     {
//       name: "Raj",
//       gender: "Male",
//       phone: "(302) 555-0107",
//       email: "raj@adobe.com",
//       place: "Thane",
//       active: true
//     },
//     {
//       name: "Dhanashree",
//       gender: "Female",
//       phone: "(252) 555-0126",
//       email: "Dhanashree@tesla.com",
//       place: "Vikhroli",
//       active: false
//     },
//     {
//       name: "Jerome Bell",
//       gender: "Male",
//       phone: "(629) 555-0129",
//       email: "jerome@gmail.com",
//       place: "Ghansoli",
//       active: false
//     },
//     {
//       name: "Kathryn Murphy",
//       gender: "Male",
//       phone: "(406) 555-0120",
//       email: "kathryn@microsoft.com",
//       place: "Ghatkopar",
//       active: false
//     },
//     {
//       name: "Jacob Jones",
//       gender: "Male",
//       phone: "(208) 555-0112",
//       email: "jacob@yahoo.com",
//       place: "Thane",
//       active: false
//     },
//     {
//       name: "Kristin Watson",
//       gender: "Male",
//       phone: "(704) 555-0127",
//       email: "kristin@facebook.com",
//       place: "Kurla",
//       active: true
//     }
//   ];

//   const tableBody = document.getElementById("userTableBody");

//   users.forEach(user => {
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${user.name}</td>
//       <td>${user.gender}</td>
//       <td>${user.phone}</td>
//       <td>${user.email}</td>
//       <td>${user.place}</td>
//       <td>
//         <button class="${user.active ? "deactivate-btn" : "activate-btn"}">
//           ${user.active ? "Deactivate" : "Activate"}
//         </button>
//       </td>
//     `;
//     tableBody.appendChild(tr);
//   });
// });


const users = [
  { name: "Rajendra Dhanvi", gender: "Male", phone: "(225) 555-0118", email: "raju@gmail.com", place: "Kanjur marg", status: "activate" },
  { name: "Ankita", gender: "Female", phone: "(205) 555-0100", email: "ankta@yahoo.com", place: "Vashi", status: "deactivate" },
  { name: "Raj", gender: "Male", phone: "(302) 555-0107", email: "raj@adobe.com", place: "Thane", status: "deactivate" },
  { name: "Dhanashree", gender: "Female", phone: "(252) 555-0126", email: "Dhanashree@tesla.com", place: "Vikhroli", status: "activate" },
  { name: "Jerome Bell", gender: "Male", phone: "(629) 555-0129", email: "jerome@gmail.com", place: "Ghansoli", status: "activate" },
  { name: "Kathryn Murphy", gender: "Male", phone: "(406) 555-0120", email: "kathryn@microsoft.com", place: "Ghatkopar", status: "activate" },
  { name: "Jacob Jones", gender: "Male", phone: "(208) 555-0112", email: "jacob@yahoo.com", place: "Thane", status: "activate" },
  { name: "Kristin Watson", gender: "Male", phone: "(704) 555-0127", email: "kristin@facebook.com", place: "Kurla", status: "deactivate" }
];

const tbody = document.getElementById('userTableBody');

users.forEach(user => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${user.name}</td>
    <td>${user.gender}</td>
    <td>${user.phone}</td>
    <td>${user.email}</td>
    <td>${user.place}</td>
    <td><button class="status-btn ${user.status}">${user.status === "activate" ? "Activate" : "Deactivate"}</button></td>
  `;
  tbody.appendChild(tr);
});

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}