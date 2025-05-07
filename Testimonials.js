const testimonials = [
  { name: "Rajendra Dhanvi", testimony: "Testimony 1", phone: "(225) 555-0118", details: "Established in 2007...", place: "Thane" },
  { name: "John", testimony: "Testimony 2", phone: "(205) 555-0100", details: "Established in 2007. John sir established it", place: "Vikhroli" },
  { name: "Raj", testimony: "Testimony 3", phone: "(302) 555-0107", details: "The only church that distributes food to ...", place: "Thane" },
  { name: "Dhanashree", testimony: "Testimony 4", phone: "(252) 555-0126", details: "Established in 2012...", place: "Kanjur Marg" },
  { name: "Jerome Bell", testimony: "Testimony 5", phone: "(629) 555-0129", details: "The only church that distributes food to ...", place: "Kurla" },
  { name: "Kathryn Murphy", testimony: "Testimony 6", phone: "(406) 555-0120", details: "Established in 2012...", place: "Thane" },
  { name: "Jacob Jones", testimony: "Testimony 7", phone: "(208) 555-0112", details: "The only church that distributes food to ...", place: "Dombivli" },
  { name: "Kristin Watson", testimony: "Testimony 8", phone: "(704) 555-0127", details: "The only church that distributes food to ...", place: "Ghatkopar" }
];

const tbody = document.getElementById("testimonial-body");

testimonials.forEach((t, i) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="p-2">${t.name}</td>
    <td class="p-2">${t.testimony}</td>
    <td class="p-2">${t.phone}</td>
    <td class="p-2">${t.details}</td>
    <td class="p-2">${t.place}</td>
    <td>
 <div class="button-group">
   <button class="approve">Approve</button>
   <button class="delete">Delete</button>
 </div>
 </td>
     
  `;
  tbody.appendChild(row);
});

function approve(index) {
  alert(`Testimonial "${testimonials[index].testimony}" approved!`);
}

function remove(index) {
  const row = tbody.children[index];
  row.remove();
  alert(`Testimonial "${testimonials[index].testimony}" deleted.`);
}




















// const testimonies = [
//     { name: "Rajendra Dhanvi", testimony: "Testimony 1", phone: "(225) 555-0118", details: "Established in 2007...", place: "Thane" },
//     { name: "John", testimony: "Testimony 2", phone: "(205) 555-0100", details: "Established in 2007. John sir established it", place: "Vikhroli" },
//     { name: "Raj", testimony: "Testimony 3", phone: "(302) 555-0107", details: "The only church that distributes food to ...", place: "Thane" },
//     { name: "Dhanashree", testimony: "Testimony 4", phone: "(252) 555-0126", details: "Established in 2012...", place: "Kanjur Marg" },
//     { name: "Jerome Bell", testimony: "Testimony 5", phone: "(629) 555-0129", details: "The only church that distributes food to ...", place: "Kurla" },
//     { name: "Kathryn Murphy", testimony: "Testimony 6", phone: "(406) 555-0120", details: "Established in 2012...", place: "Thane" },
//     { name: "Jacob Jones", testimony: "Testimony 7", phone: "(208) 555-0112", details: "The only church that distributes food to ...", place: "Dombivli" },
//     { name: "Kristin Watson", testimony: "Testimony 8", phone: "(704) 555-0127", details: "The only church that distributes food to ...", place: "Ghatkopar" }
//   ];
  
//   const tableBody = document.getElementById("testimonyTable");
  
//   function renderTable() {
//     testimonies.forEach(entry => {
//       const row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${entry.name}</td>
//         <td>${entry.testimony}</td>
//         <td>${entry.phone}</td>
//         <td>${entry.details}</td>
//         <td>${entry.place}</td>
//         <td>
//           <button class="approve">Approve</button>
//           <button class="delete">Delete</button>
//         </td>
//       `;
//       tableBody.appendChild(row);
//     });
//   }
  
//   document.addEventListener("DOMContentLoaded", renderTable);
  

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
  