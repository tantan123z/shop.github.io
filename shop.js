
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = this.getAttribute("data-product-name");
            showNotification(`Bạn đã mua thành công ${productName}`);
        });
    });

    const menuLinks = document.querySelectorAll(".sidebar ul li a");
    const contents = document.querySelectorAll(".content");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            contents.forEach(content => {
                content.style.display = content.id === targetId ? "block" : "none";
            });
        });
    });
});

function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notification-message");

    notificationMessage.innerText = message;
    notification.style.display = "block";

    setTimeout(closeNotification, 3000); // Auto close notification after 3 seconds
}

function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
}
document.querySelectorAll('.sidebar ul li a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetId = item.getAttribute('href');
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });
        document.querySelector(targetId).style.display = 'block';
        document.getElementById('sidebar').style.left = '-200px';
    });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-200px' || sidebar.style.left === '') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-200px';
    }
}
var text = "Shop LikeAPK";
var index = 0;
var speed = 100; // Tốc độ của máy đánh chữ, milliseconds per character

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriterContainer").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        index = 0; // Đặt lại index về 0 để lặp lại từ đầu
        document.getElementById("typewriterContainer").innerHTML = ""; // Xóa văn bản hiện tại
        setTimeout(typeWriter, speed); // Bắt đầu lại việc đánh chữ
    }
}

// Gọi hàm để bắt đầu đánh chữ lần đầu
typeWriter();
// Lắng nghe sự kiện cuộn trang

