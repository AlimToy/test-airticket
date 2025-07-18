  async function fetchSuggestions(term) {
      const response = await fetch(`https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(term)}&locale=ru&types[]=city&types[]=airport`);
      return await response.json();
    }

    function setupAutocomplete(inputId, suggestionsId) {
      const input = document.getElementById(inputId);
      const suggestionBox = document.getElementById(suggestionsId);

      input.addEventListener('input', async function () {
        const term = input.value.trim();
        suggestionBox.innerHTML = '';
        if (term.length < 2) return;

        const results = await fetchSuggestions(term);

        results.forEach(place => {
          const li = document.createElement('li');
          li.textContent = `${place.name} (${place.code})`;
          li.addEventListener('click', () => {
            input.value = `${place.name} (${place.code})`;
            suggestionBox.innerHTML = '';
          });
          suggestionBox.appendChild(li);
        });
      });

      // Скрытие подсказок при клике вне поля
      document.addEventListener('click', (e) => {
        if (!suggestionBox.contains(e.target) && e.target !== input) {
          suggestionBox.innerHTML = '';
        }
      });
    }

    setupAutocomplete('departure', 'fromSuggestions');
    setupAutocomplete('arrival', 'toSuggestions');

