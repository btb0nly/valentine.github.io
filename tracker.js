const ENDPOINT = "https://script.google.com/macros/s/AKfycbymrXhG-dPCV7DmakZE2LglGE4Pi_M1jDOM-SbKcYLi7zsRvVR_6C8M8Q5fTvqdPuJa/exec";

function logChoice(page, choice, extra = "") {
  fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page,
      choice,
      extra,
      userAgent: navigator.userAgent
    })
  }).catch(() => {});
}
