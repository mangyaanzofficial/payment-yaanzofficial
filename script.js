function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById("successMsg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// ... fungsi sebelumnya tetap

let music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.play();
    isPlaying = true;
  }
}

// Optional: Play otomatis saat user klik pertama kali halaman
window.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
    }).catch(() => {}); // ignore autoplay block
  }
}, { once: true });

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("fade-in");
    }, i * 200); // muncul satu per satu
  });
});