// - nama warung : warung gurangseng
// - alamat : Jl. Siliwangi dlm 1 No.61/155B Rt.02 Rw.01 Kel. Cipaganti Kec. Coblong 40131
// - kontak : 088223342107

// kategori makanan : Makanan berat, makanan ringan, minuman

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