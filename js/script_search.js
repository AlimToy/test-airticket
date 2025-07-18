  document.getElementById("findTicketBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const origin = document.getElementById("departure").value.trim().toLowerCase();
    const destination = document.getElementById("arrival").value.trim().toLowerCase();
    const depart_date = document.getElementById("departureDate").value;
    const return_date = document.getElementById("returnDate").value;
    const passengers = document.getElementById("passengers").value;

    // Подставь свой партнёрский домен (White Label) или ссылку
    const affiliateMarker = "649243"; // например: 123456
    const url = `https://www.aviasales.ru/search/${origin}${depart_date.replace(/-/g, '').slice(2, 6)}${destination}${return_date ? return_date.replace(/-/g, '').slice(2, 6) : ''}1?marker=${affiliateMarker}&adult_passengers=${passengers}`;

    window.open(url, "_blank");
  });
