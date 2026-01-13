document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const grid = document.getElementById('restaurant-grid');
    const btnLunch = document.getElementById('btn-lunch');
    const btnDinner = document.getElementById('btn-dinner');
    const btnCafe = document.getElementById('btn-cafe');
    const btnRandom = document.getElementById('btn-random');
    const body = document.body;
    const modeTitle = document.getElementById('mode-title');

    // Modal Elements
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalContent = document.getElementById('modal-result');

    let currentMode = 'lunch';

    // Initialize
    init();

    function init() {
        renderRestaurants();
        setupEventListeners();
    }

    function setupEventListeners() {
        btnLunch.addEventListener('click', () => setMode('lunch'));
        btnDinner.addEventListener('click', () => setMode('dinner'));
        btnCafe.addEventListener('click', () => setMode('cafe'));
        btnRandom.addEventListener('click', pickRandom);

        // Modal Close
        modalClose.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    function setMode(mode) {
        if (currentMode === mode) return;
        currentMode = mode;

        // Update UI
        // Reset classes
        btnLunch.classList.remove('active');
        btnDinner.classList.remove('active');
        btnCafe.classList.remove('active');
        body.classList.remove('dinner-mode', 'cafe-mode');

        if (mode === 'lunch') {
            btnLunch.classList.add('active');
            modeTitle.textContent = "점심 메뉴 추천";
        } else if (mode === 'dinner') {
            btnDinner.classList.add('active');
            body.classList.add('dinner-mode');
            modeTitle.textContent = "저녁 메뉴 추천";
        } else if (mode === 'cafe') {
            btnCafe.classList.add('active');
            body.classList.add('cafe-mode');
            modeTitle.textContent = "카페 & 디저트 추천";
        }

        // Re-render grid with animation
        renderRestaurants();
    }

    function getFilteredRestaurants() {
        return restaurants.filter(r => r.tags.includes(currentMode));
    }

    function renderRestaurants() {
        grid.innerHTML = '';
        const filtered = getFilteredRestaurants();

        filtered.forEach((r, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${index * 50}ms`; // Staggered animation

            card.innerHTML = `
                <div class="card-icon">${r.icon}</div>
                <h3>${r.name}</h3>
                <div class="category">${r.category}</div>
                <p class="desc">${r.description}</p>
                <div class="menu-highlight">⭐ ${r.bestMenu}</div>
            `;

            card.addEventListener('click', () => showResult(r));

            grid.appendChild(card);
        });
    }

    function pickRandom() {
        const filtered = getFilteredRestaurants();
        if (filtered.length === 0) return;

        // Simple roulette effect
        const duration = 2000; // 2 seconds
        const interval = 100;
        let elapsed = 0;

        openModal();
        modalContent.innerHTML = '<div style="font-size: 3rem;">🎲</div><h3>고르는 중...</h3>';

        const timer = setInterval(() => {
            const random = filtered[Math.floor(Math.random() * filtered.length)];
            modalContent.innerHTML = `
                <div style="font-size: 3rem;">${random.icon}</div>
                <h3>${random.name}</h3>
                <p>${random.bestMenu}</p>
            `;
            elapsed += interval;
            if (elapsed >= duration) {
                clearInterval(timer);
                const finalPick = filtered[Math.floor(Math.random() * filtered.length)];
                showResult(finalPick, true);
            }
        }, interval);
    }

    function showResult(restaurant, isRandom = false) {
        openModal();
        // const titlePrefix = isRandom ? "운명의 선택은!" : "선택하신 식당";
        modalContent.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 20px;">${restaurant.icon}</div>
            <h2 style="margin-bottom: 10px; font-size: 2rem;">${restaurant.name}</h2>
            <p style="color: #666; margin-bottom: 20px;">${restaurant.category} | ${restaurant.description}</p>
            <div style="background:var(--bg-color); padding: 15px; border-radius: 10px; font-weight: bold;">
                추천 메뉴: ${restaurant.bestMenu}
            </div>
        `;
    }

    function openModal() {
        modal.style.display = 'flex';
        // Trigger reflow for transition if we added one (we'll do basic display for now)
        setTimeout(() => modal.classList.add('show'), 10);
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
});
