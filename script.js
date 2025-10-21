function searchCases() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.getElementsByClassName("case-card");

  for (let card of cards) {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  }
}
