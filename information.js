// Function to open the popup
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'flex'; // Pop-up muncul sebagai flexbox
}

// Function to close the popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none'; // Sembunyikan pop-up
}

// Ensure all popups are hidden on initial page load
window.onload = function() {
    var popups = document.getElementsByClassName('popup');
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = 'none'; // Pastikan semua pop-up tersembunyi
    }
}