document.getElementById("open-modal-btn").onclick = function () {
    let modal = document.getElementById("myModal");
    let modalContent = document.querySelector(".modal-content");
    modal.style.display = "block";
    setTimeout(() => {
        modalContent.classList.add("show");
    }, 10);
};
document.querySelector(".close").onclick = function () {
    let modalContent = document.querySelector(".modal-content");
    modalContent.classList.remove("show");
    setTimeout(() => {
        document.getElementById("myModal").style.display = "none";
    }, 500);
};

window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    let modalContent = document.querySelector(".modal-content");
    if (event.target == modal) {
        modalContent.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }
};

// handle search
const dataArray = [
    "giới thiệu",
    "tuyển sinh",
    "đào tạo đại học",
    "cung cầu việc làm",
    "tin tức",
    "liên hệ",
];
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function () {
    const query = searchInput.value.toLowerCase();

    if (dataArray.includes(query)) {
        alert("Tìm thấy thông tin trên !");
    } else {
        alert("Không tìm thấy thông tin trên !");
    }
});
