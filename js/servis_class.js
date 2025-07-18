let counts = {
  adults: 1,
  children: 0,
  infants: 0,
};

function toggleDropdown() {
  const menu = document.getElementById('passengers');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function changeCount(type, delta) {
  counts[type] = Math.max(0, counts[type] + delta);
  if (type === 'adults' && counts[type] === 0) counts[type] = 1; // Минимум 1 взрослый
  document.getElementById(type).innerText = counts[type];
  updateSummary();
}

function updateSummary() {
  const total = counts.adults + counts.children + counts.infants;
  const cls = document.querySelector('input[name="class"]:checked').value;
  document.getElementById('summary').innerHTML = `${total} пассажир${total > 1 ? 'а' : ''}<br><small>${cls}</small>`;
}

// Закрыть выпадашку при клике вне её
window.onclick = function(e) {
  const menu = document.getElementById('passengs');
  // Если клик был вне элемента с классом .dropdown
  if (!e.target.closest('.dropdown')) {
    if (menu) {
      menu.style.display = 'none';
    }
  }
};

