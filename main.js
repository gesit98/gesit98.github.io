document.addEventListener('DOMContentLoaded', () => {
    // Tombol admin
    const adminBtn = document.getElementById('adminKey');
    if(adminBtn) {
        adminBtn.addEventListener('click', () => {
            const password = prompt("Password Admin:");
            if(login(password)) {
                location.href = "admin/index.html";
            } else if(password !== null) {
                alert("Akses ditolak!");
            }
        });
    }
});