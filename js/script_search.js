async function fetchTickets() {
  const response = await fetch('https://api.travelpayouts.com/v2/prices/latest?currency=rub&token=640b0a84dc83869915adca41653430cf');
  const data = await response.json();
  console.log(data); // Проверка данных
  displayTickets(data.data); // Функция для отображения
}

function displayTickets(tickets) {
  const container = document.getElementById('tickets-container');
  tickets.forEach(ticket => {
    container.innerHTML += `
      <div class="ticket">
        <p>${ticket.origin} → ${ticket.destination}</p>
        <p>Цена: ${ticket.value} руб.</p>
        <a href="https://aviasales.ru?marker=649243" target="_blank">Купить</a>
      </div>
    `;
  });
}

fetchTickets();