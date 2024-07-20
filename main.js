document.addEventListener("DOMContentLoaded", function() {
    filterCards(); // Initialize with all cards displayed
});

function filterCards() {
    const filter = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function clearFilter() {
    document.getElementById('categoryFilter').value = 'all';
    filterCards();
}
