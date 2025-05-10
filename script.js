// Simpan artikel ke localStorage
document.getElementById("formArtikel").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const judul = document.getElementById("judul").value;
    const konten = document.getElementById("konten").value;
    
    // Buat objek artikel
    const artikel = {
        id: Date.now(),
        judul,
        konten,
        tanggal: new Date().toLocaleDateString()
    };
    
    // Ambil data yang sudah ada atau buat array baru
    let semuaArtikel = JSON.parse(localStorage.getItem("artikel")) || [];
    
    // Tambahkan artikel baru
    semuaArtikel.push(artikel);
    
    // Simpan ke localStorage
    localStorage.setItem("artikel", JSON.stringify(semuaArtikel));
    
    alert("Artikel berhasil disimpan!");
    window.location.href = "index.html";
});

// Tampilkan artikel di halaman utama
function tampilkanArtikel() {
    const semuaArtikel = JSON.parse(localStorage.getItem("artikel")) || [];
    const mainElement = document.querySelector("main");
    
    if (mainElement && semuaArtikel.length > 0) {
        mainElement.innerHTML = "";
        
        semuaArtikel.forEach(artikel => {
            mainElement.innerHTML += `
                <article>
                    <h2>${artikel.judul}</h2>
                    <p>${artikel.konten.substring(0, 100)}...</p>
                    <small>${artikel.tanggal}</small>
                </article>
            `;
        });
    }
}

// Jalankan saat halaman dimuat
if (window.location.pathname.endsWith("index.html")) {
    tampilkanArtikel();
}