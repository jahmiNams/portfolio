/* ===== Interactivité JS ===== */

/* ---------- 1) Validation du formulaire ---------- */
const form = document.getElementById("contactForm");
const info = document.getElementById("formInfo");

function isEmailValide(email) {
  // Test simple : contient @ et un point après
  return email.includes("@") && email.includes(".");
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Vérifications simples
  if (prenom === "" || nom === "" || email === "" || message === "") {
    info.textContent = "Erreur : veuillez remplir tous les champs.";
    info.style.color = "#ffb3b3";
    return;
  }

  if (!isEmailValide(email)) {
    info.textContent = "Erreur : email invalide. Exemple : nom@gmail.com";
    info.style.color = "#ffb3b3";
    return;
  }

  // OK
  info.textContent = "Message envoyé (simulation). Merci !";
  info.style.color = "#9cffc7";

  // Réinitialiser le formulaire
  form.reset();
});

/* ---------- 2) Effet de survol sur projets ---------- */
const cards = document.querySelectorAll(".project-card");

cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    card.style.transform = "translateY(-6px)";
    card.style.transition = "0.2s";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
  });
});

/* ---------- 3) Menu actif selon la section (scroll) ---------- */
const sections = [
  { id: "accueil", linkId: "link-accueil" },
  { id: "apropos", linkId: "link-apropos" },
  { id: "projets", linkId: "link-projets" },
  { id: "competences", linkId: "link-competences" },
  { id: "contact", linkId: "link-contact" },
];

function setActiveLink(activeLinkId) {
  sections.forEach(function (s) {
    const link = document.getElementById(s.linkId);
    link.classList.remove("active");
  });
  document.getElementById(activeLinkId).classList.add("active");
}

window.addEventListener("scroll", function () {
  // On regarde quelle section est la plus visible
  let current = "link-accueil";

  sections.forEach(function (s) {
    const section = document.getElementById(s.id);
    const rect = section.getBoundingClientRect();

    // Si le haut de la section est proche du haut de l’écran
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = s.linkId;
    }
  });

  setActiveLink(current);
});

// Au chargement, on active Accueil
setActiveLink("link-accueil");
