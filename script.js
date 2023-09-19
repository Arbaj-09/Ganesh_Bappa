function showWishes() {
    const name = document.getElementById("name").value;
    if (name) {
        localStorage.setItem("userName", name);
        window.location.href = "wishes.html";
    } else {
        alert("Please enter your name.");
    }
}

window.onload = function() {
    const userName = localStorage.getItem("userName");
    if (userName) {
        document.getElementById("name").value = userName;
    }
}
