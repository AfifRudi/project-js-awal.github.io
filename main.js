const bodyone = document.querySelector("body");

bodyone.addEventListener("mousemove", (e) => {
  const xoff = e.offsetX;
  const yoff = e.offsetY;
  const spanel = document.createElement("span");
  const size = Math.random() * 100;

  spanel.style.top = yoff + "px";
  spanel.style.left = xoff + "px";
  spanel.style.width = size + "px";
  spanel.style.height = size + "px";

  bodyone.appendChild(spanel);

  setTimeout(() => {
    spanel.remove();
  }, 3000);
});
