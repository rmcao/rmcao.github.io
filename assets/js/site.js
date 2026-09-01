(() => {
  const toggle = document.querySelector(".outline-toggle");
  const outline = document.querySelector(".site-outline");
  const scrim = document.querySelector(".outline-scrim");

  if (!toggle || !outline || !scrim) return;

  const setOpen = (open, restoreFocus = false) => {
    document.body.classList.toggle("outline-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    outline.setAttribute("aria-hidden", String(!open));
    outline.toggleAttribute("inert", !open);

    if (open) {
      outline.querySelector("a")?.focus();
    } else if (restoreFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  scrim.addEventListener("click", () => setOpen(false, true));

  outline.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false, true);
    }
  });
})();
