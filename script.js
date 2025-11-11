// ======== Navegação entre telas ========
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// ======== Inicialização ========
document.addEventListener("DOMContentLoaded", () => {
  goTo('screen-login');
});

// ======== Carrossel de imagens ========
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/1/10/Proerd.jpg",
  "https://site.sorriso.mt.gov.br/storage/app/uploads/public/7d2/52d/22a/thumb__600_0_0_0_auto.jpg",
  "https://www.alagoinhas.ba.gov.br/wp-content/uploads/2023/09/5065bec1-be7a-447b-a96d-7dc73c81d94e.jpeg",
  "https://www.sejusp.ms.gov.br/wp-content/uploads/2023/04/Proerd-Policial-Dieny-Foto-Bruno-Rezende-06-730x480-1.jpg"
];

let currentIndex = 0;

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("carousel-img").src = images[currentIndex];
}

// ======== Alerta estilizado ========
function alert(msg) {
  const box = document.createElement("div");
  box.textContent = msg;
  Object.assign(box.style, {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#e50914",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    boxShadow: "0 0 15px #e50914",
    transition: "opacity 0.3s",
  });
  document.body.appendChild(box);
  setTimeout(() => box.style.opacity = "0", 1800);
  setTimeout(() => box.remove(), 2200);
}
