// Render grid foto staff di halaman Detail Departemen.

function cardHtml(person, deptId, index) {
  return `
    <li>
      <article class="card-staff reveal">
        <div class="media card-staff__media media--hover-zoom">
          <img src="assets/images/staff/${deptId}-${index + 1}.jpg" alt="" loading="lazy">
        </div>
        <div class="card-staff__body">
          <span class="card-staff__role">${person.role}</span>
          <span class="card-staff__name">${person.name}</span>
        </div>
      </article>
    </li>
  `;
}

// container: elemen <ul data-js="staff-list">
export function renderStaffGrid(container, staffList, deptId) {
  container.innerHTML = staffList.map((p, i) => cardHtml(p, deptId, i)).join('');
}