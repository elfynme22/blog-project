// Always start from top after reload (prevents jumping down)
window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});
