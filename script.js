document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded');

    // Video Play Debugging
    const video = document.getElementById('bg-video');
    if (video) {
        video.addEventListener('error', () => {
            console.error('Error loading background video');
        });
    }

    // Popup Elements
    const popup = document.getElementById("welcomePopup");
    const closeButton = document.getElementById("closePopupButton");

    // Show popup when the page loads
    if (popup) {
        // Remove any hidden class and set display to flex
        popup.classList.remove("hidden");
        popup.style.display = "flex";
    }

    // Set a timer to auto-close the popup after 5 seconds
    const autoCloseTimer = setTimeout(() => {
        closePopup();
    }, 5000);

    // Function to close popup
    function closePopup() {
        if (popup) {
            popup.classList.add("hidden");
            popup.style.display = "none";
        }
    }

    // Close popup when the OK button is clicked
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            closePopup();
            clearTimeout(autoCloseTimer);
        });
    }

    // Close popup when the ESC key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
            clearTimeout(autoCloseTimer);
        }
    });
});
