const leftBtn = document.getElementById("move-left");
const rightBtn = document.getElementById("move-right");

let slides = 100;
leftBtn.addEventListener("click", () => {
  if (slides <= 400) {
    document.querySelectorAll(".img-container").forEach((e) => {
      e.style.transform = `translateX(-${slides}%)`;
    });
    slides += 100;
  }else {
     document.querySelectorAll(".img-container").forEach((e) => {
      e.style.transform = `translateX(${0}%)`;
      slides = 100;
    });
  }
});

rightBtn.addEventListener("click", () => {
  if (slides > 0) {
    slides -= 100;
    document.querySelectorAll(".img-container").forEach((e) => {
      e.style.transform = `translateX(-${slides}%)`;
    });
  }
});
