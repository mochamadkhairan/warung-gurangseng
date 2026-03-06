// - kontak : 088223342107
// Fungsi Show More / Show Less
function refreshMenuDisplay() {
    const cards = Array.from(document.querySelectorAll('.card-detail'));
    const showMoreWrapper = document.getElementById('showMoreWrapper');
    const showMoreBtn = document.getElementById('showMoreBtn');
    
    // 1. Filter berdasarkan kategori
    const filteredCards = cards.filter(card => card.getAttribute('data-category') === currentCategory);
    
    const limit = 5;
    
    cards.forEach(card => card.classList.add('is-hidden')); // Sembunyikan semua dulu

    filteredCards.forEach((card, index) => {
        if (isExpanded || index < limit) {
            card.classList.remove('is-hidden');
            card.classList.add('is-visible');
        } else {
            card.classList.add('is-hidden');
            card.classList.remove('is-visible');
        }
    });

    // 3. Logika Munculkan/Sembunyikan Tombol Show More
    if (filteredCards.length > limit) {
        showMoreWrapper.style.display = 'block';
        showMoreBtn.innerText = isExpanded ? "Sembunyikan Menu" : "Lihat Menu Lainnya";
    } else {
        showMoreWrapper.style.display = 'none';
    }
}

function toggleShowMore() {
    isExpanded = !isExpanded;
    refreshMenuDisplay();
    
    // Jika disembunyikan, scroll balik ke judul menu
    if (!isExpanded) {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
}

// Fungsi Search Menu
function searchMenu() {
    const input = document.getElementById('menuSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.card-detail');
    const btnWrapper = document.querySelector('.show-more-wrapper');

    // Jika sedang mencari, tampilkan semua yang cocok (abaikan fitur show more sementara)
    if (input !== "") {
        btnWrapper.style.display = "none";
        cards.forEach(card => {
            const title = card.querySelector('h5').innerText.toLowerCase();
            if (title.includes(input)) {
                card.style.display = "block";
                card.classList.remove('hidden-item');
            } else {
                card.style.display = "none";
            }
        });
    } else {
        // Jika input kosong, kembalikan ke sistem awal (hanya 5 yang tampil)
        location.reload(); // Cara termudah untuk reset filter dan show more
    }
}

function filterMenu(category) {
    // 1. Update tombol aktif
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // 2. Filter kartu
    const cards = document.querySelectorAll('.card-detail');
    cards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function toggleWaChat() {
    const waWindow = document.getElementById('waWindow');
    if (waWindow.style.display === 'block') {
        waWindow.style.display = 'none';
    } else {
        waWindow.style.display = 'block';
        // Tambahkan suara notifikasi kecil jika ingin lebih interaktif
    }
}

// Munculkan widget setelah 3 detik pengunjung masuk website
window.onload = () => {
    setTimeout(() => {
        document.querySelector('.wa-bubble').style.transform = 'scale(1)';
    }, 3000);
};