document.addEventListener('DOMContentLoaded', function() {
    // Состояние приложения
    const state = {
        passengers: {
            adults: 1,
            children: 0,
            infants: 0
        },
        selectedClass: 'Эконом'
    };

    // Элементы DOM
    const elements = {
        dropdownBtn: document.querySelector('.dropdown-btn'),
        dropdownContent: document.getElementById('dropdown-content'),
        arrow: document.querySelector('.arrow'),
        passengerCount: document.getElementById('passenger-count'),
        classDisplay: document.getElementById('class-display'),
        adultsCount: document.getElementById('adults-count'),
        childrenCount: document.getElementById('children-count'),
        infantsCount: document.getElementById('infants-count')
    };

    // Обработчики событий
    function setupEventListeners() {
        // Открытие/закрытие dropdown
        elements.dropdownBtn.addEventListener('click', toggleDropdown);
        
        // Изменение количества пассажиров
        document.querySelectorAll('.counter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const type = this.dataset.type;
                const isPlus = this.classList.contains('plus');
                changePassengerCount(isPlus ? 1 : -1, type);
            });
        });
        
        // Выбор класса
        document.querySelectorAll('.class-option').forEach(option => {
            option.addEventListener('click', function() {
                selectClass(this.dataset.class);
            });
        });
        
        // Закрытие dropdown при клике вне его
        document.addEventListener('click', function(event) {
            if (!elements.dropdownBtn.contains(event.target) {
                closeDropdown();
            }
        });
    }

    // Функции
    function toggleDropdown() {
        elements.dropdownContent.classList.toggle('show');
        elements.arrow.classList.toggle('rotate');
    }

    function closeDropdown() {
        elements.dropdownContent.classList.remove('show');
        elements.arrow.classList.remove('rotate');
    }

    function changePassengerCount(change, type) {
        state.passengers[type] += change;
        
        // Убраны все ограничения (можно выбирать отрицательные значения и любое количество младенцев)
        if (state.passengers[type] < 0) state.passengers[type] = 0;
        
        updateCounters();
        updateSummary();
    }

    function selectClass(className) {
        state.selectedClass = className;
        elements.classDisplay.textContent = className;
        closeDropdown();
    }

    function updateCounters() {
        elements.adultsCount.textContent = state.passengers.adults;
        elements.childrenCount.textContent = state.passengers.children;
        elements.infantsCount.textContent = state.passengers.infants;
    }

    function updateSummary() {
        const total = state.passengers.adults + state.passengers.children + state.passengers.infants;
        elements.passengerCount.textContent = 
            `${total} пассажир${getPassengerEnding(total)}`;
    }

    function getPassengerEnding(count) {
        if (count === 1) return '';
        if (count < 5) return 'а';
        return 'ов';
    }

    // Инициализация
    setupEventListeners();
    updateSummary();
});