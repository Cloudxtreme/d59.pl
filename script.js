document.addEventListener('DOMContentLoaded', function () {

    // Get the modal
    var infoModal = document.getElementById('infoModal');
    var contactModal = document.getElementById('contactModal');
    var allModals = document.querySelectorAll('.modal');

    // Get the button that opens the modal
    var infoBtn = document.getElementById("infoBtn");
    var contactBtn = document.getElementById("contactBtn");

    // Get the <span> element that closes the modal
    var close = document.getElementsByClassName("close");

    // When the user clicks the button, open the modal 
    infoBtn.onclick = function () {
        infoModal.style.display = "block";
    }
    contactBtn.onclick = function () {
        contactModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            hideModals();
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == infoModal || event.target == contactModal) {
            hideModals();
        }
    }

    function hideModals() {
        for (var i = 0; i < allModals.length; i++) {
                allModals[i].style.display = "none";
            }
    }

})