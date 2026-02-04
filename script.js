const heart = document.getElementById("heart");
const text = document.getElementById("text");
const title = document.getElementById("title");

let clicked = false;

heart.addEventListener("click", () => {
  if (!clicked) {
    title.innerText = "You’re Special 💖";
    text.innerText = "Bestie like you = rare gem ✨";
    document.body.style.background =
      "radial-gradient(circle, #ff2cdf, #000)";
    clicked = true;
  } else {
    title.innerText = "Hey Bestie 💫";
    text.innerText = "Tap the heart 👇";
    document.body.style.background =
      "radial-gradient(circle, #0f2027, #000)";
    clicked = false;
  }
});
