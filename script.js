
// In questa maniera il segnalibro da vuoto diventa pieno al clik
document.querySelectorAll(".fa-regular.fa-bookmark.ms-2").forEach(function(bookmarkIcon) {
    bookmarkIcon.addEventListener("click", function() {
        if (bookmarkIcon.classList.contains("fa-regular")) {
            bookmarkIcon.classList.remove("fa-regular");
            bookmarkIcon.classList.add("fa-solid");
        } else if (bookmarkIcon.classList.contains("fa-solid")) {
            bookmarkIcon.classList.remove("fa-solid");
            bookmarkIcon.classList.add("fa-regular");
        }
    });
});


function addShadow(element) {
    element.classList.add("card-shadow"); // Aggiunge la classe card-shadow
  }
  
  function removeShadow(element) {
    element.classList.remove("card-shadow"); // Rimuove la classe card-shadow
  }

