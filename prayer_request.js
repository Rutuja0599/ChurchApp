const requests = [
  {
    name: "Rajendra Dhanvi",
    requestFor: "Self",
    contact: "(225) 555-0118",
    prayer: "Please pray for my uncle recovery...",
    place: "Thane"
  },
  {
    name: "Ankita",
    requestFor: "My Uncle",
    contact: "(205) 555-0100",
    prayer: "Please pray for my business",
    place: "Vikhroli"
  },
  {
    name: "Raj",
    requestFor: "Self",
    contact: "(302) 555-0107",
    prayer: "Hamare family members k liye pray karo",
    place: "Thane"
  },
  {
    name: "Dhanashree",
    requestFor: "Self",
    contact: "(252) 555-0126",
    prayer: "Please pray for my business",
    place: "Kanjur Marg"
  },
  {
    name: "Jerome Bell",
    requestFor: "My Father",
    contact: "(629) 555-0129",
    prayer: "Please pray for my uncle recovery...",
    place: "Kurla"
  },
  {
    name: "Kathryn Murphy",
    requestFor: "My Brother",
    contact: "(406) 555-0120",
    prayer: "Hamare family members k liye pray karo",
    place: "Thane"
  },
  {
    name: "Jacob Jones",
    requestFor: "Self",
    contact: "(208) 555-0112",
    prayer: "Please pray for my business",
    place: "Dombivili"
  },
  {
    name: "Kristin Watson",
    requestFor: "Father",
    contact: "(704) 555-0127",
    prayer: "Hamare family members k liye pray karo",
    place: "Ghatkopar"
  }
];

const tbody = document.getElementById("prayer-list");

function renderRequests(data) {
  tbody.innerHTML = "";
  data.forEach(req => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${req.name}</td>
      <td>${req.requestFor}</td>
      <td>${req.contact}</td>
      <td>${req.prayer}</td>
      <td>${req.place}</td>
     <td>
  <div class="button-group">
    <button class="approve">Approve</button>
    <button class="delete">Delete</button>
  </div>
</td>
    `;
    tbody.appendChild(row);
  });
}

renderRequests(requests);

////////////////////
// const requests = [
//   {
//     name: "Rajendra Dhanvi",
//     requestFor: "Self",
//     contact: "(225) 555-0118",
//     prayer: "Please pray for my uncle recovery...",
//     place: "Thane"
//   },
//   {
//     name: "Ankita",
//     requestFor: "My Uncle",
//     contact: "(205) 555-0100",
//     prayer: "Please pray for my business",
//     place: "Vikhroli"
//   },
//   // Add other entries similarly...
// ];

// const tbody = document.getElementById("prayer-list");

// function renderRequests(data) {
//   tbody.innerHTML = "";
//   data.forEach(req => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${req.name}</td>
//       <td>${req.requestFor}</td>
//       <td>${req.contact}</td>
//       <td>${req.prayer}</td>
//       <td>${req.place}</td>
//       <td>
//         <button class="approve">Approve</button>
//         <button class="delete">Delete</button>
//       </td>
//     `;
//     tbody.appendChild(row);
//   });
// }

// renderRequests(requests);

// document.addEventListener("DOMContentLoaded", () => {
//   const requests = [
//     {
//       name: "Rajendra Dhanvi",
//       for: "Self",
//       contact: "(225) 555-0118",
//       details: "Please pray for my uncle recovery...",
//       place: "Thane",
//       approved: false
//     },
//     {
//       name: "Ankita",
//       for: "My Uncle",
//       contact: "(205) 555-0100",
//       details: "Please pray for my business",
//       place: "Vikhroli",
//       approved: false
//     },
//     {
//       name: "Raj",
//       for: "Self",
//       contact: "(302) 555-0107",
//       details: "Hamare family members k liye pray karo",
//       place: "Thane",
//       approved: false
//     }
//   ];

//   const tbody = document.getElementById("prayerTableBody");

//   function renderTable(data) {
//     tbody.innerHTML = "";
//     data.forEach((req, index) => {
//       const tr = document.createElement("tr");
//       tr.innerHTML = `
//         <td>${req.name}</td>
//         <td>${req.for}</td>
//         <td>${req.contact}</td>
//         <td>${req.details}</td>
//         <td>${req.place}</td>
//         <td>
//           <button class="approve-btn" data-index="${index}">
//             ${req.approved ? "Approved" : "Approve"}
//           </button>
//           <button class="reject-btn" data-delete="${index}">Delete</button>
//         </td>
//       `;
//       tbody.appendChild(tr);
//     });
//   }

//   renderTable(requests);

//   tbody.addEventListener("click", function (e) {
//     if (e.target.matches("[data-index]")) {
//       const index = e.target.getAttribute("data-index");
//       requests[index].approved = !requests[index].approved;
//       renderTable(requests);
//     }

//     if (e.target.matches("[data-delete]")) {
//       const index = e.target.getAttribute("data-delete");
//       requests.splice(index, 1);
//       renderTable(requests);
//     }
//   });

//   document.getElementById("search").addEventListener("input", function (e) {
//     const keyword = e.target.value.toLowerCase();
//     const filtered = requests.filter(req =>
//       req.name.toLowerCase().includes(keyword) ||
//       req.details.toLowerCase().includes(keyword) ||
//       req.place.toLowerCase().includes(keyword)
//     );
//     renderTable(filtered);
//   });
// });
