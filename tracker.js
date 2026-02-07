const ENDPOINT = "https://script.google.com/macros/s/AKfycbxL2oIc02-q8lNmwTAwHQ-EFsxkWLNHN3vl4vXqqJbitSURJdpgOtrHs1yOGPi5483y/exec";

function logChoice(page, choice, extra = "") {
  const body = new URLSearchParams();
  body.append("page", page);
  body.append("choice", choice);
  body.append("extra", extra);
  body.append("userAgent", navigator.userAgent);

  fetch(ENDPOINT, {
    method: "POST",
    body
  }).catch(() => {});
}
