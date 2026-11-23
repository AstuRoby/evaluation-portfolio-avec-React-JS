// Sélection des éléments du DOM
const form = document.querySelector("#comment-form");
const nameInput = document.querySelector("#nom");
const commentInput = document.querySelector("#commentaire");
const errorMessage = document.querySelector("#error-message");
const commentsList = document.querySelector("#comments-list");

// Affiche un message d'erreur sous le formulaire
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

// Masque le message d'erreur
function hideError() {
  errorMessage.textContent = "";
  errorMessage.hidden = true;
}

// Crée la carte d'un commentaire (sans innerHTML)
function createComment(name, text) {
  const card = document.createElement("article");
  card.classList.add("comment");

  const author = document.createElement("p");
  author.classList.add("comment-author");
  author.textContent = name;

  const content = document.createElement("p");
  content.classList.add("comment-text");
  content.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("btn-delete");

  const deleteIcon = document.createElement("span");
  deleteIcon.classList.add("btn-delete-icon");
  deleteIcon.textContent = "🗑️";

  const deleteLabel = document.createElement("span");
  deleteLabel.textContent = "Supprimer";

  deleteButton.appendChild(deleteIcon);
  deleteButton.appendChild(deleteLabel);

  // Suppression du commentaire sans recharger la page
  deleteButton.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(author);
  card.appendChild(content);
  card.appendChild(deleteButton);

  return card;
}

// Soumission du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const text = commentInput.value.trim();

  if (name.length < 2) {
    showError("Le nom doit contenir au moins 2 caractères.");
    return;
  }

  if (text.length < 10) {
    showError("Le commentaire doit contenir au moins 10 caractères.");
    return;
  }

  hideError();
  commentsList.appendChild(createComment(name, text));
  form.reset();
});

// Commentaire d'exemple présent à l'ouverture de la page (comme sur la maquette)
commentsList.appendChild(createComment("Téo", "Superbe recette !"));
