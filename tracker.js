const ENDPOINT = "https://script.google.com/macros/s/AKfycbw3Ya8CrKgyjERvpXN-jMW_OnQfAPxG7kOXEh7rRDYVjoMfbWZNJ1EvlYN30nndb9MP/exec";

function logChoice(page, choice, extra = "") {
  const params = new URLSearchParams({
    page,
    choice,
    extra,
    userAgent: navigator.userAgent
  });

  // Beacon por imagen: no CORS, no bloqueos
  const img = new Image();
  img.src = `${ENDPOINT}?${params.toString()}`;
}
