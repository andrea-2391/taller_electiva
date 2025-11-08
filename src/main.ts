const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = (event.target as HTMLAnchorElement).getAttribute("href");
    const target = document.querySelector(href!);
    target?.scrollIntoView({ behavior: "smooth" });
  });
});
