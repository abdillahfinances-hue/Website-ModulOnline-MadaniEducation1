document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const books = document.querySelectorAll(".book");

    searchInput.addEventListener("keyup", function () {
        const keyword = searchInput.value.toLowerCase();

        books.forEach(function (book) {
            const text = book.innerText.toLowerCase();

            if (text.includes(keyword)) {
                book.style.display = "";
            } else {
                book.style.display = "none";
            }
        });
    });
});