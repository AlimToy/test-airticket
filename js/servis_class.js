    // Пассажиры
    let passengers = {
        adults: 1,
        children: 0,
        infants: 0
    };
    
    // Класс обслуживания
    let selectedClass = 'Эконом';
    
    function toggleDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.querySelector(".arrow").classList.toggle("rotate");
    }
    
    function changePassengerCount(change, type) {
        passengers[type] += change;
        
        // Ограничения
        if (passengers[type] < 0) passengers[type] = 0;
        if (type === 'infants' && passengers[type] > passengers['adults']) {
            passengers[type] = passengers['adults'];
        }
        
        // Обновление счетчиков
        document.getElementById(`${type}-count`).textContent = passengers[type];
        
        // Обновление заголовка
        updateSummary();
    }
    
    function selectClass(className) {
        selectedClass = className;
        document.querySelector(`input[value="${className}"]`).checked = true;
        updateSummary();
    }
    
    // function updateSummary() {
    //     const total = passengers.adults + passengers.children + passengers.infants;
    //     let summaryText = `${passengers.adults} взр-${passengers.adults === 1 ? 'ый' : 'ых'}`;
        
    //     if (passengers.children > 0) {
    //         summaryText += `, ${passengers.children} реб-${passengers.children === 1 ? 'ок' : passengers.children < 5 ? 'ка' : 'ок'}`;
    //     }
        
    //     if (passengers.infants > 0) {
    //         summaryText += `, ${passengers.infants} мл-${passengers.infants === 1 ? 'ец' : passengers.infants < 5 ? 'ца' : 'цев'}`;
    //     }
        
    //     document.querySelector(".passenger-summary").textContent = summaryText;
    //     document.querySelector(".dropdown-btn div:first-child div:first-child").textContent = 
    //         `${total} пассажир${total === 1 ? '' : total < 5 ? 'а' : 'ов'} • ${selectedClass}`;
    // }
    
    // Закрыть dropdown при клике вне его
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
            document.getElementById("myDropdown").classList.remove("show");
            document.querySelector(".arrow").classList.remove("rotate");
        }
    }
