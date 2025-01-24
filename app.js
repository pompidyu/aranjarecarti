// Generare cărți (de la 7 la As)
function generateCards() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["7", "8", "9", "10", "J", "Q", "K", "A"];
  const deck = [];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push(`${value} ${suit}`);
    });
  });

  return deck;
}

// Funcție de aranjare pe coloane
function arrangeCards(deck) {
  const columns = [];
  let column = [];

  deck.forEach(card => {
    column.push(card);
    if (column.length === 5) {
      columns.push(column);
      column = [];
    }
  });

  if (column.length > 0) {
    columns.push(column); // Adaugă ultimele cărți rămase
  }

  return columns;
}

// Randare pe ecran
function renderColumns(columns) {
  const container = document.getElementById("columns");
  container.innerHTML = ""; // Curăță coloanele existente

  columns.forEach(column => {
    const columnDiv = document.createElement("div");
    columnDiv.className = "column";

    column.forEach(card => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      cardDiv.textContent = card;
      columnDiv.appendChild(cardDiv);
    });

    container.appendChild(columnDiv);
  });
}

// Apelarea funcțiilor
const deck = generateCards();
const shuffledDeck = deck.sort(() => Math.random() - 0.5); // Amestecă cărțile
const columns = arrangeCards(shuffledDeck);
renderColumns(columns);
