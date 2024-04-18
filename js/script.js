var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});




// Menu scroll

// Smooth scrolling effect for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('section');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            sections[index + 1].scrollIntoView({ behavior: 'smooth' });
        });
    });
});
