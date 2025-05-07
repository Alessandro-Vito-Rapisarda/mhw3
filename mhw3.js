const img = document.getElementById("slideshow");
const didascalia = document.getElementById("didascalia");

const immagini = [
  { src: "https://www.ristorantecracco.it/wp-content/uploads/2018/04/Cracco-m-01-1.jpg", id: 1 },
  { src: "https://www.ristorantecracco.it/wp-content/uploads/2018/04/Cracco-m-03-1.jpg", id: 2 },
  { src: "https://www.ristorantecracco.it/wp-content/uploads/2018/04/Cracco-m-04-1.jpg", id: 3 }
];

let index = 0;

function cambiaImmagine() {
  index = (index + 1) % immagini.length;
  const nuova = immagini[index];

  img.src = nuova.src;
  img.setAttribute("data-index", nuova.id);
  img.classList.add("attiva");

  didascalia.classList.remove("hidden");
  didascalia.textContent = nuova.testo || "";

  setTimeout(() => {
    img.classList.remove("attiva");
  }, 500);
}

img.addEventListener("click", cambiaImmagine);

// Funzione per caricare il video
document.getElementById("load-video").addEventListener("click", function () {
  const data = {
    title: "Come si MANGIA nel ristorante di CARLO CRACCO 1 stella Michelin?",
    url: "https://www.youtube.com/embed/BTuyKHN2rvw"
  };

  const container = document.getElementById("video-container");
  container.innerHTML = "";

  const title = document.createElement("h4");
  title.textContent = data.title;

  const iframe = document.createElement("iframe");
  iframe.src = data.url;
  iframe.width = "560";
  iframe.height = "315";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  container.appendChild(title);
  container.appendChild(iframe);
});

// Funzione per caricare le recensioni
document.getElementById("load-reviews").addEventListener("click", function () {
  const reviews = [
    { user: "Emanuele S.", text: "Esperienza fantastica, piatti eccellenti!" },
    { user: "Chiara G.", text: "Servizio impeccabile e location unica." },
    { user: "Alessandro R.", text: "Un viaggio tra i sapori, consigliatissimo." }
  ];

  const container = document.getElementById("reviews-container");
  container.innerHTML = "";

  reviews.forEach(review => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    const user = document.createElement("h5");
    user.textContent = review.user;

    const text = document.createElement("p");
    text.textContent = review.text;

    reviewDiv.appendChild(user);
    reviewDiv.appendChild(text);
    container.appendChild(reviewDiv);
  });
});