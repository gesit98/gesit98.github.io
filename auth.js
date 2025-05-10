const ADMIN_PASS = "G3s1t98!"; // Ganti dengan password kuat

function checkAuth() {
    return sessionStorage.getItem('authToken') === btoa(ADMIN_PASS);
}

function login(password) {
    if(password === ADMIN_PASS) {
        sessionStorage.setItem('authToken', btoa(password));
        return true;
    }
    return false;
}

function logout() {
    sessionStorage.removeItem('authToken');
}

// Auto logout setelah 30 menit
setTimeout(logout, 1800000);