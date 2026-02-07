const ENDPOINT = "https://script.google.com/macros/s/AKfycbxL2oIc02-q8lNmwTAwHQ-EFsxkWLNHN3vl4vXqqJbitSURJdpgOtrHs1yOGPi5483y/exec";

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
