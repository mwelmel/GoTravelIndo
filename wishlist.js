// Function to add a wish to the list
function addWish() {
    const wishItem = document.getElementById("wishItem").value;

    // memeriksa apa inputan kosong atau tidak
    if (wishItem === "") {
        alert("Please enter a place or activity for your wish list.");
        return;
    }

    // membuat list baru
    const li = document.createElement("li");
    li.textContent = wishItem;

    // membuat tombol hapus
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        this.parentElement.remove(); // Remove the list item when the button is clicked
    };

    li.appendChild(removeBtn);

    document.getElementById("wishList").appendChild(li);

    document.getElementById("wishItem").value = "";
}
