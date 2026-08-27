<script>
// Fungsi untuk menampilkan Pop-up dinamis sesuai game yang diklik
function openModal(imageSrc, gameTitle) {
    updatePattern(); // Mengacak/memperbarui pola saat diklik
    
    // Update Gambar dan Judul jika data dikirim
    if (imageSrc) document.getElementById('gameImg').src = imageSrc;
    if (gameTitle) document.getElementById('gameTitle').innerText = gameTitle;
    
    document.getElementById('popupModal').style.display = 'flex';
}
        }

        // Data pilihan pola acak
        const icons = ['❌', '✅'];
        const dcOptions = ['DC Off', 'DC On'];
        const counts = [20, 30, 50, 70, 100, 500];

        // Fungsi untuk meng-generate 4 baris pola secara acak
        function generateRandomPola() {
            let html = '';
            for (let i = 0; i < 4; i++) {
                const icon1 = icons[Math.floor(Math.random() * icons.length)];
                const icon2 = icons[Math.floor(Math.random() * icons.length)];
                const icon3 = icons[Math.floor(Math.random() * icons.length)];
                const count = counts[Math.floor(Math.random() * counts.length)];
                const dc = dcOptions[Math.floor(Math.random() * dcOptions.length)];

                html += `<li>${icon1} - ${icon2} - ${icon3} - ${count} - ${dc}</li>`;
            }
            return html;
        }

        // Fungsi untuk mengacak RTP (rentang 75% - 98%)
        function generateRandomRTP() {
            return Math.floor(Math.random() * (98 - 75 + 1)) + 75;
        }

        // Memperbarui isi pop-up
        function updatePattern() {
            document.getElementById('polaContainer').innerHTML = generateRandomPola();
            document.getElementById('rtpVal').innerText = generateRandomRTP() + ' %';
        }

        // Tutup Modal
        function closeModal() {
            document.getElementById('popupModal').style.display = 'none';
        }

        // Jalankan saat halaman pertama kali dimuat
        updatePattern();

        // Timer ganti pola otomatis setiap 10 menit (600.000 ms)
        setInterval(updatePattern, 10 * 60 * 1000);
    </script>
                

<script>
document.addEventListener("DOMContentLoaded", function() {
  // Mengubah semua link yang memiliki class "game-card"
  const targetLinks = document.querySelectorAll("a.game-card");
  
  targetLinks.forEach(link => {
    link.href = "javascript:void(0);"
  });
});
</script
